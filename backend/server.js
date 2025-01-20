import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";



dotenv.config()
const app=express()
dbCon()
app.use(cors(
    origin:{" https://mern-dne2.vercel.app/"},
    credentials:true,
))
app.use(express.json())
app.use('/api',routers)




app.listen(process.env.PORT,()=>{
    console.log('server is running')
})
