import mongoose from  'mongoose'

const subscriptionsSchema = new  mongoose.Schema({})

export const subscriptions = mongoose.model("subscriptions","subscriptionsSchema")
