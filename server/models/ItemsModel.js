import mongoose from "mongoose"
import { toMonthWords } from "../actions/toMonthWords.js"

const ItemSchema = new mongoose.Schema({
    category:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    uid:{
        type: String,
        required:true
    },
    amount:{
        type:Number
    },
    month:{
        type:String,
        default:toMonthWords(new Date().getMonth())+new Date().getFullYear()
    },
    createdAt: { type: Date, default: Date.now },
})

const ItemModel=mongoose.model("items", ItemSchema)
export default ItemModel