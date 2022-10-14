package controller

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

// getUploadsDir 获取上传文件的路径
func getUploadsDir() (uploads string) {
	exe, err := os.Executable() // 获取执行的exe
	if err != nil {
		log.Fatal(err)
	}
	dir := filepath.Dir(exe) // 拼接上传文件的路径
	uploads = filepath.Join(dir, "uploads")
	return
}

// UploadsController  下载文件
func UploadsController(c *gin.Context) {
	// 从页面获取需要下载的文件名
	if curPath := c.Param("path"); curPath != "" {
		target := filepath.Join(getUploadsDir(), curPath) // 获取到在物理机上的路径
		c.Header("Content-Description", "File Transfer")
		c.Header("Content-Transfer-Encoding", "binary")
		c.Header("Content-Disposition", "attachment; filename="+curPath)
		c.Header("Content-Type", "application/octet-stream")
		c.File(target)
	} else {
		c.Status(http.StatusNotFound)
	}
}
