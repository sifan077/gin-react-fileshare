package controller

import (
	"github.com/gin-gonic/gin"
	"net"
	"net/http"
)

// AddressesController  获取局域网内所有的ip地址
func AddressesController(context *gin.Context) {
	addrs, _ := net.InterfaceAddrs() // 获取局域网内所有ip
	var result []string              //声明一个数组
	for _, address := range addrs {  //遍历局域网ip
		if ipnet, ok := address.(*net.IPNet); ok && !ipnet.IP.IsLoopback() { // 如果ip可用，就添加进数组
			result = append(result, ipnet.IP.String()) // 因为append可能会导致扩容，所以把append的数组赋值给原数组
		}
	}
	context.JSON(http.StatusOK, gin.H{"addresses": result})
}
