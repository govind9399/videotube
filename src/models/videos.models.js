import mongoose from  'mongoose'

const videosSchema = new  mongoose.Schema({
     id:{type:String, required:true,default:0},
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
        required:true,
        unique:false
     },
     description:{
        type:String,
        required:true
     },
     duration:{
        type:Number,
        required:true,
        default:0
     },
     views:{
        type:Number,
        default:0
     },
     isPublished:{
        type:Boolean,
        required:true
     },
     owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
     }
},{timestamps:true})

export const Videos = mongoose.model("Videos","userSchema")
