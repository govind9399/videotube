import mongoose from  "mongoose";

const userSchema = new  mongoose.Schema({
       id:{
        type:String,
        unique:true,
        required:true
       },
       username:{
         type:String,
         required:true,
         lowercase:true
       },
       fullName:{
         type:String,
         uppercase:true,
         required:true
       },
       email:{
        type:String,
        required:true,
       },
       password:{
         type:String,
         required:true,
         default:false
       },
       avatar:{
         type:String,
         required:true
       },
       coverImage:{
        type:String,
        required:true
       },
       refreshToken:{
        type:String,
        required:true
       },
       createdAt:{type:Date, default:"00/00/0000"},
       updatedAt:{type:Date, default:"00/00/0000"},
},{timestamps:true})

export const user = mongoose.model("user","userSchema")
