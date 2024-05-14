const app = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const port = 3000

const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Connected to MongoDB")
    }catch(error){
        console.log(error.message,"Couldn't connect")
    }

}

connectToDB()

module.exports = connectToDB