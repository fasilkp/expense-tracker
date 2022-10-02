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
    entertainment: {
        type: Number,
        default:0
    },
    rent: {
        type: Number,
        default:0
    },
    food: {
        type: Number,
        default:0
    },
    transport: {
        type: Number,
        default:0
    },
    emi: {
        type: Number,
        default:0
    },
    shopping: {
        type: Number,
        default:0
    },
    hospital: {
        type: Number,
        default:0
    },
    school: {
        type: Number,
        default:0
    },
    fees: {
        type: Number,
        default:0
    },
    other: {
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