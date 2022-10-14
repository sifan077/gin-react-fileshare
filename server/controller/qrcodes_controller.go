package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/skip2/go-qrcode"
	"log"
	"net/http"
)

// QrcodesController 把文件下载链接转成二维码
func QrcodesController(context *gin.Context) {
	if content := context.Query("content"); content != "" {
		//log.Println(content)
		// 通过链接生成二维码
		png, err := qrcode.Encode(content, qrcode.Medium, 256)
		if err != nil {
			log.Fatal(err)
		}
		// 发送给前端
		context.Data(http.StatusOK, "image/png", png)
	} else {
		context.Status(http.StatusPreconditionRequired)
	}
}
