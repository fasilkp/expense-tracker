import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    monthlyLimit:{
        type:Number
    },
    createdAt: { type: Date, default: Date.now },
})

const UserModel=mongoose.model("Users", UserSchema)
export default UserModel