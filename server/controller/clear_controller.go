package controller

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"os"
)

// FileClear 清除缓存
func FileClear(context *gin.Context) {
	log.Println("清除缓存中")
	dir := getUploadsDir()
	err := os.RemoveAll(dir)
	if err != nil {
		log.Fatal(err)
		return
	}
	context.JSON(http.StatusOK, gin.H{"msg": "清除缓存成功"})
}
