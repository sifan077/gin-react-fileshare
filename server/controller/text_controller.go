package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path"
	"path/filepath"
)

// TextController  接收文本，并保存至文本文件
func TextController(context *gin.Context) {
	var json struct {
		Raw string `json:"raw"`
	}
	if err := context.ShouldBindJSON(&json); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"err": err.Error()})
	} else {
		exe, err := os.Executable() // 获取当前执行文件的路径
		if err != nil {
			log.Fatal(err)
		}
		dir := filepath.Dir(exe) // 获取当前执行文件的目录
		if err != nil {
			log.Fatal(err)
		}
		filename := uuid.New().String()          //生成一个文件名
		uploads := filepath.Join(dir, "uploads") // 拼接 uploads 的绝对路径
		err = os.MkdirAll(uploads, os.ModePerm)  // 创建 uploads 目录
		if err != nil {
			log.Fatal(err)
		}
		fullpath := path.Join("uploads", filename+".txt")                            //拼接文件的绝对路径，不含exe所在目录
		err = ioutil.WriteFile(filepath.Join(dir, fullpath), []byte(json.Raw), 0644) //将json.Raw 写入文件
		if err != nil {
			log.Fatal(err)
		}
		context.JSON(http.StatusOK, gin.H{"url": "/" + fullpath}) //返回文件的绝对路径(不含exe所在目录)
	}
}
