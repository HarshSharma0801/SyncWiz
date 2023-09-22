import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Added from "./Routes/AddHandler.js";
import Logged from "./Routes/LoginHandler.js";
import Regitsered from "./Routes/RegisterHandler.js";
import Read from "./Routes/ReadHandler.js";

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ConnectionString =
  "mongodb+srv://Harsh2:dragonite1@forprojects.wjbiut0.mongodb.net/SyncWiz";

mongoose.connect(ConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", function () {
  console.log("Error Connecting");
});
db.on("open", function () {
  console.log("Successfull Connected to Database ");
});

app.use(Logged);

app.use(Regitsered);

app.use(Added);

app.use(Read);



app.listen(3000, () => {
  console.log("Server Running well");
});
