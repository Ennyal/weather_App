import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    phone:String
})



const user= mongoose.model('user',userSchema)

export default user;