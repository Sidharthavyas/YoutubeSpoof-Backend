import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from 'express'
import connectDB from "./db/db.js";
const app=express()


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port:${process.env.PORT}`);
        
    })
})
    
.catch((err)=>{
    console.log("mongo db connection failed!!!",err);
    
})
//First Approach to connect db
// ;(async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
//       app.on('error',(error)=>{
//         console.log('error',error);
//         throw error

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port:${process.env.PORT}`);
            
//         })
        
        
//       })
//     } catch (error) {
//         console.log(error);
//         throw err
        
        
//     }
// }) () // async function IIFE=> Immediately Invoked Function Expression, it will run immediately after the file is loaded

//Second Approach to connect db
//write in different file and import here
