import mongoose from  'mongoose'

const playlistsSchema = new  mongoose.Schema({
       id:{
        type:String,
        unique:true,
        required:true
 },
  videos:{
      type:mongoose.Schema.Types.ObjectId
  },
  name:{
    type:String,
    required:true
  },


},{timestamps:true})

export const playlists = mongoose.model("playlists","playlistsSchema")
