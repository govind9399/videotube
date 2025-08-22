import mongoose from  'mongoose'

const tweetsSchema = new  mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:users,
        unique:true,
        required:true
    },
    content:{
        required:true,
        unique:false,
        type:String,
    }
},{timestamps:true})

export const tweets = mongoose.model("tweets","tweetsSchema")
