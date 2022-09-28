import mongoose from "mongoose"
import { toMonthWords } from "../actions/toMonthWords.js"

const monthSchema = new mongoose.Schema({
    spent:{
        type: Number,
        required:true,
        default:0
    },
    limit:{
        type: Number,
        default:0
    },
    balance:{
        type: Number,
        default:0
    },
    uid:{
        type:String,
    },
    month:{
        type:String,
        default:toMonthWords(new Date().getMonth())+new Date().getFullYear()
    },
    createdAt: { type: Date, default: Date.now },
})

const MonthlyModel=mongoose.model("monthly", monthSchema, 'monthly')
export default MonthlyModel