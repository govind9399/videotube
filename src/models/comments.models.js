 import mongoose from  'mongoose'
import { Videos } from './videos.models'

const commentsSchema = new  mongoose.Schema({
     id:{
        type:String,
        unique:true,
        required:true
     },
     video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Videos,
        required:true,
        unique:false
     },
  content:{
      required:true,
      unique:false,
      type:String
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:users,
    required:true,
    unqiue:true
  },
},{timestamps:true})

export const comments = mongoose.model("comments","commentsSchema")
