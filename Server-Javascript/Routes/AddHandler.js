import express from "express";
import Users from "../Modals/UserDetails.js";
const Added = express();


Added.post('/add' , async(req,res)=>{



   try {
    const data = req.body;
    
    await Users.insertMany([data])
    res.status(200).json("Added")
    console.log("Added User")
    
   } catch (error) {
    console.log(error
        )
   }

    
})

export default Added

