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
        type:String,
        default:5000
    },
    createdAt: { type: Date, default: Date.now },
})

const UserModel=mongoose.model("Users", UserSchema)
export default UserModel