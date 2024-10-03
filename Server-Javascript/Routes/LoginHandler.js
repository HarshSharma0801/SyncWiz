import express from "express";
import Login from "../Modals/LoginDetails.js";



const Logged = express();





  Logged.post('/login',async (req,res)=>{
     
    const email = req.body.email;
    const password = req.body.password;

    console.log(password);
    console.log(email);

    try {
      const Checked = await Login.findOne({email:email,password:password});

      if(Checked){
        console.log(Checked.name)
        res.json({valid:"exists" , name:Checked.name})
        console.log('exists')

      }
      else{
        res.json("not exists")

        console.log('not exists')
      }

      
    } catch (error) {
      console.log("error")
    }

  
  })


export default Logged