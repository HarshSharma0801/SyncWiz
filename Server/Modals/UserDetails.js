
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

  name : {
    type:String
  },
  githubUsername:{
    type: String
  },
  YourQuote:{
    type: String
  },
 
})


const Users = mongoose.model('UserDetails',UserSchema);

export default Users
