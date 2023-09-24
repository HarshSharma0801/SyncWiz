import express from "express";
import Users from "../Modals/UserDetails.js";
const Update = express();


Update.post('/edit/:id' , async(req,res)=>{

    const id  = req.params.id


   try {
    const value = req.body;
    const data = await Users.findByIdAndUpdate(id , value)
    res.status(200).json(data)
      
    console.log(value);
    console.log("updated");


    
    
   } catch (error) {
    console.log(error
        )
   }

    
})

export default Update
