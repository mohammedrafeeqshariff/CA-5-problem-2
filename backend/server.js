const port = 3000;
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require('./dbConfig');
const cors = require('cors')
const { getRouter } = require('./routes');
const app = express();



app.use(cors())
// app.use(express.json())
// app.use('/',getRouter)


const starter = async()=>{
    try{
        await connectToDB()
        app.listen(port, ()=>{
        console.log(`🚀 Server running on http://localhost:${port}`)
        })
    }catch(error){
        console.log(error.message)
    }
}

starter()