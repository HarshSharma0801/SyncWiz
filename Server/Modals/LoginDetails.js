import mongoose from "mongoose";


const LoginSchema = new mongoose.Schema({

  name : {
    type:String
  },
  password:{
    type: String
  },
  email:{
    type: String
  }
})


const Login = mongoose.model('logindetails',LoginSchema);

export default Login
