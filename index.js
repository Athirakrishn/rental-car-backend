//import dotenv cors express
//load .env file contents into process.env
require('dotenv').config()
const express =require('express')
const cors=require('cors')
const router = require('./routing/router')

//create server
const rentalCarServer = express()

//enable cors protocol in server app
rentalCarServer.use(cors())
rentalCarServer.use(express.json())
rentalCarServer.use(router)
//create port 
const PORT = 3000
//run server port 
rentalCarServer.listen(PORT,()=>{
  console.log(`rental car started port:${PORT}`);
 
})

//resolving http request
rentalCarServer.post('/',(req,res)=>{
  res.status(200).send('POST REQUEST')
})