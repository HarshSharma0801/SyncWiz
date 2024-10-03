package services

import (
	"go-crud/models"
	"go-crud/repository"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserService struct {
	MongoCollection *mongo.Collection
}

type Response struct {
	Data  interface{} `json:"data,omitempty"`
	Error string      `json:"error,omitempty"`
}

func (user *UserService) CreateUser(w http.ResponseWriter, r *http.Request) {

	w.Header().Add("Content-Type", "application/json")
	res := &Response{}
	defer json.NewEncoder(w).Encode(res)

	var userModel models.User

	err := json.NewDecoder(r.Body).Decode(&userModel)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Println("invalid body", err)
		return
	}

	userRepo := repository.UserRepo{MongoCollection: user.MongoCollection}

	InsertedId, err := userRepo.CreateUser(&userModel)
	if err != nil {
		log.Println("failed to insert user", err)
	}

	res.Data = InsertedId
	w.WriteHeader(http.StatusOK)

	log.Println("inserted user", InsertedId)

}

func (user *UserService) GetUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	res := &Response{}
	defer json.NewEncoder(w).Encode(res)

	userRepo := repository.UserRepo{MongoCollection: user.MongoCollection}

	employeeData, err := userRepo.GetUsers()

	if err != nil {
		log.Println("failed to get user", err)
		res.Error = err.Error()

	}

	res.Data = employeeData
	w.WriteHeader(http.StatusOK)

}

func (user *UserService) GetUserById(w http.ResponseWriter, r *http.Request) {

	w.Header().Add("Content-Type", "application/json")
	res := &Response{}
	defer json.NewEncoder(w).Encode(res)

	userId := mux.Vars(r)["id"]

	userRepo := repository.UserRepo{MongoCollection: user.MongoCollection}

	userModel, err := userRepo.GetUserById(userId)

	if err != nil {
		log.Println("failed to get user", err)
		res.Error = err.Error()

	}

	res.Data = userModel
	w.WriteHeader(http.StatusOK)
}

func (user *UserService) UpdateUserById(w http.ResponseWriter, r *http.Request) {

	w.Header().Add("Content-Type", "application/json")
	res := &Response{}
	defer json.NewEncoder(w).Encode(res)

	userId := mux.Vars(r)["id"]

	var userModel models.User

	err := json.NewDecoder(r.Body).Decode(&userModel)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Println("invalid body", err)
		return
	}

	userRepo := repository.UserRepo{MongoCollection: user.MongoCollection}

	UpdatedCount, err := userRepo.UpdateUserById(userId, &userModel)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Println("failed to update user", err)
		res.Error = err.Error()
	}
	res.Data = UpdatedCount
	w.WriteHeader(http.StatusOK)

}

func (empployee *UserService) DeleteUserById(w http.ResponseWriter, r *http.Request) {

	w.Header().Add("Content-Type", "application/json")
	res := &Response{}
	defer json.NewEncoder(w).Encode(res)

	userId := mux.Vars(r)["id"]

	userRepo := repository.UserRepo{MongoCollection: empployee.MongoCollection}

	DeletedCount, err := userRepo.DeleteUserById(userId)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Println("failed to delete user", err)
		res.Error = err.Error()
	}

	res.Data = DeletedCount
	w.WriteHeader(http.StatusOK)

}
