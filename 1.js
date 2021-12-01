
import express, { response } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { auth } from "./auth.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT ||9000;
const pizza=[
    {
       name:"Pizza",
       picture :"https://media.istockphoto.com/photos/supreme-pizza-slice-lift-picture-id153784617?k=20&m=153784617&s=612x612&w=0&h=muHavOUqyjg8RkaIwbruet5I_IFkYJP6cPBi5M47jvI="
    }
   ]
  
app.use(express.json());
app.use(cors());
app.get("/",(request,response)=>{
    response.send("Pizza delivery app")
})

const MONGO_URL=process.env.MONGO_URL;
async function createConnection(){
    const client=new MongoClient(MONGO_URL);
    await client.connect()
    console.log("Mongodb connected")
  
   return client;
}

createConnection();
///

app.get('/pizza',(request,response)=>
{
    response.send(pizza)
})

app.get('/pizza',async (request,response)=>
{
    const res=await client
    .db("b27rwd")
    .collection("pizza")
    .findOne()
    response.send(recipes)
})

app.listen(PORT,()=>console.log("the server is started in",PORT))

async function genPassword(password){
    const salt= await bcrypt.genSalt(10)
    console.log(salt)
    const hashedPassword=await bcrypt.hash(password,salt)
  console.log(hashedPassword)
}
  genPassword("password@123")