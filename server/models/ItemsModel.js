import mongoose from "mongoose"

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
    createdAt: { type: Date, default: Date.now },
})

const ItemModel=mongoose.model("items", ItemSchema)
export default ItemModel