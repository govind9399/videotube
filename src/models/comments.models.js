 import mongoose from  'mongoose'

const commentsSchema = new  mongoose.Schema({})

export const comments = mongoose.model("comments","commentsSchema")
