import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
const app = express()

const port =process.env.PORT;


app.get('/',(req,res)=>{

    res.send("hiii");
})

app.get('/youtube',(req,res)=>{

    res.send("these is partyaksh Youtube");
})

app.get('/test',(req,res)=>{
    res.send('<h1>thes is my first code of node js</h1>');
})

app.listen(port,()=>{
    console.log(`this is port ${port}`);
})