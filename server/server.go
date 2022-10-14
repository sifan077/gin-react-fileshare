package server

import (
	"embed"
	"file-share/server/config"
	controller2 "file-share/server/controller"
	"file-share/server/ws"
	"github.com/gin-gonic/gin"
	"io/fs"
	"log"
	"net/http"
	"strings"
)

//go:embed frontend/dist/*
var FS embed.FS

func Run() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.New()

	router.POST("api/v1/texts", controller2.TextController)
	router.GET("api/v1/addresses", controller2.AddressesController)
	router.GET("/uploads/:path", controller2.UploadsController)
	router.GET("api/v1/qrcodes", controller2.QrcodesController)
	router.POST("api/v1/files", controller2.FilesController)
	router.GET("/clear", controller2.FileClear)

	hub := ws.NewHub()
	go hub.Run()
	router.GET("/ws", func(context *gin.Context) {
		ws.HttpController(context, hub)
	})

	staticFiles, _ := fs.Sub(FS, "frontend/dist")
	router.StaticFS("/static", http.FS(staticFiles))
	router.NoRoute(func(context *gin.Context) {
		curPath := context.Request.URL.Path
		if strings.HasPrefix(curPath, "/static") {
			reader, err := staticFiles.Open("index.html")
			if err != nil {
				log.Fatal(err)
			}
			defer reader.Close()
			stat, err := reader.Stat()
			if err != nil {
				log.Fatal(err)
			}
			context.DataFromReader(http.StatusOK, stat.Size(), "text/html;charset=utf-8", reader, nil)
		} else {
			context.Status(http.StatusNotFound)
		}
	})
	router.Run(":" + config.GetPort())
}
