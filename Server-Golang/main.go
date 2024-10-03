package main

import (
	"context"
	"go-crud/services"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var mongoClient *mongo.Client

func init (){

	err := godotenv.Load()
	if err != nil {
		log.Fatal("failed to load env !")
	}

	log.Println("env file loaded")

	mongoClient , err = mongo.Connect(context.Background(), options.Client().ApplyURI(os.Getenv("MONGO_URI")))
    
	if err != nil {
		log.Fatal("failed to connect to database !" , err)
	}
   
	err = mongoClient.Ping(context.Background() , readpref.Primary())
    if err != nil {
		log.Fatal("failed to ping database !" , err)
	}
    log.Println("successfully connected to database !")
}

func main(){

	defer mongoClient.Disconnect(context.Background())

	r:=mux.NewRouter()
	coll := mongoClient.Database(os.Getenv("DATABASE_NAME")).Collection(os.Getenv("COLLECTION_NAME"))

	UserService := services.UserService{MongoCollection:coll}

	r.HandleFunc("/add" , UserService.CreateUser).Methods(http.MethodPost)
	r.HandleFunc("/read",UserService.GetUsers).Methods(http.MethodGet)
	r.HandleFunc("/edit/{id}",UserService.GetUserById).Methods(http.MethodGet)
	r.HandleFunc("/edit/{id}",UserService.UpdateUserById).Methods(http.MethodPut)
	r.HandleFunc("/delete/{id}",UserService.DeleteUserById).Methods(http.MethodDelete)


	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, 
		AllowedMethods:   []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete}, 
		AllowedHeaders:   []string{"Content-Type", "Authorization"}, 
		AllowCredentials: true,
	})

	port := os.Getenv("PORT")
	if port ==""{
		port = "8000"
	}

	log.Printf("server is running on port %v\n", port)

	if err:=http.ListenAndServe(":"+port,c.Handler(r)); err !=nil{
		log.Fatal("Error starting the server: ", err)
	}
}