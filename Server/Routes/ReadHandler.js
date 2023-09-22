import express from "express";
import Users from "../Modals/UserDetails.js";

const Read = express();


Read.get('/read', async (req,res)=>{

 try {
    const data = await Users.find()
    res.status(200).json(data)
    
 } catch (error) {
    console.log(error)
 }

})

export default Read