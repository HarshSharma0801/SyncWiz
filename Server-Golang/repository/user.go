package repository

import (
	"context"
	"go-crud/models"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"

)

type UserRepo struct {
	MongoCollection *mongo.Collection
}

func (r *UserRepo) CreateUser(user *models.User) (interface{}, error) {
	res, err := r.MongoCollection.InsertOne(context.Background(), user)
	if err != nil {
		log.Println("failed to insert user !")
		return nil, err
	}
	log.Println("inserted user !")

	return res, nil
}


func (r *UserRepo) GetUserById(userId string) (interface{}, error) {
	var user models.User
	err := r.MongoCollection.FindOne(context.Background() , bson.D{{Key:"_id" , Value: userId}}).Decode(&user)
	if err != nil {
		log.Println("failed to get user !")
		return nil, err
	}
	log.Println("got user !")

	return user, nil
}


func (r *UserRepo) GetUsers() ([]models.User, error) {
	result, err := r.MongoCollection.Find(context.Background(), bson.D{})

	if err != nil {
		log.Println(err)
		return nil, err
	}

	var data []models.User
	err = result.All(context.Background(), &data)

	if err != nil {
		log.Println(err)
		return nil, err
	}
	return data, nil
}



func(r *UserRepo) UpdateUserById(userId string , user *models.User)(int64 , error){
	UpdateCount , err := r.MongoCollection.UpdateOne(context.Background() , bson.D{{Key: "_id" , Value: user}} , bson.D{{Key:"$set" , Value:  &user}})

	if err != nil {
		log.Println("failed to update user")
		return 0 , err
	}
	log.Println("updated user !")

	return UpdateCount.ModifiedCount , nil

}


func(r *UserRepo) DeleteUserById(userId string)(int64 , error){
	DeleteCount , err := r.MongoCollection.DeleteOne(context.Background() , bson.D{{Key: "_id" , Value: userId}})

	if err != nil {
		log.Println("failed to update user")
		return 0 , err
	}
	log.Println("updated user !")

	return DeleteCount.DeletedCount , nil

}