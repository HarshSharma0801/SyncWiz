import express from "express";
import Users from "../Modals/UserDetails.js";

const Edit = express();


Edit.get('/edit/:id', async (req,res)=>{

    const id  = req.params.id

 try {
   
    const check = await Users.findById(id);
    if(check){
        res.status(200).json(check);
    }
    
 } catch (error) {
    console.log(error)
 }

})

export default Edit

