import mongoose from "mongoose";
import {model,Schema} from "mongoose";


const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI:", process.env.MONGO_URI);


if(!MONGO_URI){
  throw new Error("MONGO_URI not defined");
}

mongoose
.connect(MONGO_URI)
.then(():void=>{console.log("MongoDB connected")})
.catch((err:Error):void =>{
  console.log(err)
  process.exit(1);
});

const userSchema = new Schema({
  username:{type:String, required:true,unique:true},
  password:{type:String,required:true}
});

export const userModel = model("User",userSchema);

const contentSchema = new Schema({
  title:String,
  link:String,
  tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
  userId: {type:mongoose.Types.ObjectId,ref:'User',required:true}
})

export const ContentModel = model("Content",contentSchema);
