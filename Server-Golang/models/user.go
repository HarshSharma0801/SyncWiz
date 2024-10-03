package models


type User struct{
	NAME   string `json:"name,omitempty" bson:"name"`
	GITHUB string `json:"githubUsername,omitempty" bson:"githubUsername"`
	QOUTE  string `json:"YourQuote,omitempty" bson:"YourQuote"`
}

