import express from "express";
import Login from "../Modals/LoginDetails.js";
const Regitsered = express();





Regitsered.post('/register',async (req,res)=>{

    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
   

    console.log(name);
    console.log(password);
    console.log(email);

    const data = {
      name:name,
      email:email,
      password:password
    }

    try {
      const Checked = await Login.findOne({email:email});

      if(Checked){
        res.json({valid:"exists" , name:data.name});
        console.log('exists')

      }
      else{
        res.json({valid:"not exists" , name:data.name})
        console.log("not exists");


        await Login.insertMany([data])
      }

      
    } catch (error) {
      console.log(error)
    }

    
  
  })


export default Regitsered