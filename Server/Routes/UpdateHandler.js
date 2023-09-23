import express from "express";
import Users from "../Modals/UserDetails.js";
const Update = express();


Update.post('/edit/:id' , async(req,res)=>{

    const id  = req.params.id


   try {
    const data = req.body;
      
    console.log(data)
    
    
   } catch (error) {
    console.log(error
        )
   }

    
})

export default Update
