import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json);

app.post("/api/v1/signup",async (req , res )=>{
  const identifier  = req.body.identifier;
  const password = req.body.password;
  
})

