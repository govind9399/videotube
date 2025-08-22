import mongoose,{Schema} from  'mongoose'

const subscriptionsSchema = new  mongoose.Schema({
          id:{
            type:String,
            required:true,
            unique:true
          },
        subscriber:{
          type:Schema.Types.ObjectId,
          ref:users
        },
      channel:{
        unique:true,
        required:true,
        type:Schema.Types.ObjectId,
        ref:users
      },     

},{timestamps:true})

export const subscriptions = mongoose.model("subscriptions","subscriptionsSchema")
