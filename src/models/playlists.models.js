import mongoose from  'mongoose'

const playlistsSchema = new  mongoose.Schema({
       id:{
        type:String,
        unique:true,
        required:true
 },
  videos:{
      type:mongoose.Schema.Types.ObjectId,
      ref:videos,
  },

  name:{
    type:String,
    required:true,
    unique:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:users
  },
  description:{
    type:String,
    unique:false,
    required:Option
  }

},{timestamps:true})

export const playlists = mongoose.model("playlists","playlistsSchema")
