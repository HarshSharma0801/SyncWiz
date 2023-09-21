import express from "express";

const Added = express();


Added.post('/add' , (req,res)=>{

    const data = req.body;

    console.log(data);

    
})

export default Added

