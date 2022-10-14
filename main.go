package main

import (
	"file-share/server"
	"file-share/server/config"
	"github.com/zserge/lorca"
	"log"
)

func main() {

	go func() {
		server.Run()
	}()
	ui, err := lorca.New("http://127.0.0.1:"+config.GetPort()+"/static/", "", 600, 800)
	if err != nil {
		log.Fatal(err)
	}
	defer ui.Close()
	<-ui.Done()
}
