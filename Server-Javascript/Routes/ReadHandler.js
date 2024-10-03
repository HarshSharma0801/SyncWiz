import express from "express";
import Users from "../Modals/UserDetails.js";

const Read = express();


Read.get('/read', async (req,res)=>{

 try {
    const data = await Users.find()
    const main = JSON.stringify({data:data});
    res.status(200).send(main)
    
 } catch (error) {
    console.log(error)
 }

})

export default Read