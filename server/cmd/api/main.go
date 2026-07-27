package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type Header struct {
	API_KEY string `header:"X-API-Key" binding:"required"`
}

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	r := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "X-API-Key"}
	r.Use(cors.New(config))

	r.GET("/api/metar/:name", func(c *gin.Context) {
		var h Header

		if err := c.ShouldBindHeader(&h); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "sem API KEY"})
			return
		}

		if h.API_KEY != os.Getenv("API_KEY") {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "API key invalido"})
			return
		}

		airportCode := c.Param("name")

		checkwxURL := fmt.Sprintf("https://api.checkwx.com/metar/%s", airportCode)

		req, err := http.NewRequest("GET", checkwxURL, nil)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao montar requisição"})
			return
		}

		req.Header.Add("X-API-Key", os.Getenv("API_KEY"))

		client := &http.Client{}
		resp, err := client.Do(req)
		if err != nil {
			c.JSON(http.StatusBadGateway, gin.H{"error": "Erro ao consultar servidor de clima"})
			return
		}

		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao processar resposta do clima"})
			return
		}

		c.Data(resp.StatusCode, "application/json", body)

	})
	r.Run(":8080")
}
