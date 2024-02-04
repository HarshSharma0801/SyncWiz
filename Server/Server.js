import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Added from "./Routes/AddHandler.js";

import Read from "./Routes/ReadHandler.js";
import Edit from "./Routes/EditHandler.js";
import Update from "./Routes/UpdateHandler.js";
import Deleted from "./Routes/DeleteHandler.js";
import 'dotenv/config'


const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ConnectionString = process.env.MONGO_URL;

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


app.use(Added);

app.use(Read);

app.use(Edit);

app.use(Update);

app.use(Deleted);






app.listen(5000, () => {
  console.log("Server Running well");
});
