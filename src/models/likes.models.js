import mongoose from  'mongoose'

const likesSchema = new  mongoose.Schema({
     id:{
        type:String,
        required:true,
        unique:true,
        default:0 
     },
     video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"videos",
        required:true
     },
     comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments",
        required:true
     },
     likedby:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"likes"
     },
     createdAt:{type:Date, default:"00/00/0000"},
     updatedAt:{type:Date, default:"00/00/0000"},

})

export const likes = mongoose.model("likes","likesSchema")
