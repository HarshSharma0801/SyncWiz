
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

  name : {
    type:String
  },
  phone:{
    type: String
  },
  email:{
    type: String
  },
  description:{
    type: String
  }
})


const Users = mongoose.model('UserDetails',UserSchema);

export default Users
