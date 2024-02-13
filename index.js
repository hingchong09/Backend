require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello Universe")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Express is listening on port: ${port}`);
})