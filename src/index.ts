import "dotenv/config";
import express from "express";
import { userModel } from "./db.js";
import jwt from "jsonwebtoken";

const JWT_PASSWORD = "!123123"

const app = express();
app.use(express.json());

//signup  
//signup  
app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    await userModel.create({ username, password });

    return res.status(200).json({
      message: "User signed up"
    });

  } catch (e) {
    return res.status(411).json({
      message: "User already exists"
    });
  }
});

//signin
//signin
app.post("/api/v1/signin" ,async (req,res) => {
  
  const { username, password } = req.body;
  const existingUser = await userModel.findOne({
    username, 
    password
  })


  if(existingUser) {
    const token = jwt.sign({
      id:existingUser._id
    },JWT_PASSWORD)
    
    res.json({
      token
    })

  } else {
      res.status(403).json({
        message:"incorrect credentials"
      })
    }
})


app.listen(3000, () => {
  console.log("Server running on port 3000");
});

 
