import mongoose from  'mongoose'

const tweetsSchema = new  mongoose.Schema({})

export const tweets = mongoose.model("tweets","tweetsSchema")
