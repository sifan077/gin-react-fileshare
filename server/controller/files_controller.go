package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
	"net/http"
	"os"
	"path"
	"path/filepath"
)

// FilesController 文件上传
func FilesController(context *gin.Context) {
	// 获取文件二进制
	file, err := context.FormFile("raw")
	if err != err {
		log.Fatal(err)
	}
	// 获取exe执行路径
	exe, err := os.Executable()
	if err != nil {
		log.Fatal(err)
	}
	dir := filepath.Dir(exe)
	if err != nil {
		log.Fatal(err)
	}
	// 随机生成文件名字
	filename := uuid.New().String()
	uploads := filepath.Join(dir, "uploads")
	err = os.MkdirAll(uploads, os.ModePerm)
	if err != nil {
		log.Fatal(err)
	}
	// 拼接文件在物理机上的路径
	fullpath := path.Join("uploads", filename+filepath.Ext(file.Filename))
	//  开始写入物理积保存文件
	fileErr := context.SaveUploadedFile(file, filepath.Join(dir, fullpath))
	if fileErr != nil {
		log.Fatal(fileErr)
	}
	// 返回文件的名
	context.JSON(http.StatusOK, gin.H{"url": "/" + fullpath})

}
