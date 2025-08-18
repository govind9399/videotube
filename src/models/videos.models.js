import mongoose from  'mongoose'

const videosSchema = new  mongoose.Schema({
     id:{type:String, required:true,default:"0"},
     videofile:{
        type:String,
        required:true
     },
     thumbfile:{
         type:String,
         required:true
     },
     title:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     duration:{
        type:Number,
        required:true
     },
     views:{
        type:Number,
        
     },
     isPublished:{
        type:Boolean
     },
     createdAt:{type:Date, default:"00/00/0000"},
     updatedAt:{type:Date, default:"00/00/0000"},
     owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
     },
},{timestamps:true})

export const Videos = mongoose.model("Videos","userSchema")
