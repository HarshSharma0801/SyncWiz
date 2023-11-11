import express from "express";
import Users from "../Modals/UserDetails.js";
const Deleted = express();


Deleted.post('/delete' , async(req,res)=>{

    const id =  req.body.id;


   try {
    console.log(id);
     await Users.findByIdAndDelete(id)
    res.status(200).json("deleted")
      
    console.log("deleted");
    
   } catch (error) {
    console.log(error
        )
   }

    
})

export default Deleted

