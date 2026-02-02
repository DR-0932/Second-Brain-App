import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

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

const userSchema = new mongoose.Schema({
  email:{type:String, requiredd: true, unique: true},
  username:{type:String, required:true,unique:true},
  password:{type:String,required:true}
});

const userModel = mongoose.model("User",userSchema);

module.exports = {userModel};