import ItemModel from "../models/ItemsModel.js";
import MonthlyModel from "../models/MonthlyModel.js";
import { toMonthWords } from "../actions/toMonthWords.js";

export const AddItem = async (req, res) => {
  const { category, amount, description, uid } = req.body;
  const newItem = new ItemModel({
    category,
    amount:parseInt(amount),
    description,
    uid
  });
  newItem.save((err) => {
    if (err)
      return res
        .status(500)
        .json({ err: true, message: "list add   failed", error: err });
  });
  await MonthlyModel.findOneAndUpdate({
    month: toMonthWords(new Date().getMonth())+new Date().getFullYear(),
    uid
  }, 
  {$inc: {spent: amount}},
  {upsert:true},
  )
  return res
    .status(201)
    .json({ err: false, message: "list add successfull", item:newItem });
};
export const getItems = async (req, res) => {
  const { uid, month } = req.body;
  try{
    if(month){
      const allItems = await ItemModel.find({uid, month}).sort({ createdAt: -1 });
      return res.status(201) .json({ err: false, allItems });
    }
    else{
      const allItems = await ItemModel.find({uid}).sort({ createdAt: -1 });
      return res.status(201) .json({ err: false, allItems });
    }
  }catch(err){
    return res .status(500).json({ err });
  }
};
export const getItemsWithLimit = async (req, res) => {
  const { uid } = req.body;
  try{
    const allItems = await ItemModel.find({uid}).sort({ createdAt: -1 }).limit(10);
    return res.status(201) .json({ err: false, allItems });
  }catch(err){
    return res .status(500).json({ err });
  }
};
export const getMonthDetails = async (req, res) => {
  const { uid,month, monthlyLimit } = req.body;
  const monthDetails = await MonthlyModel.findOne({uid, month})
  if(!monthDetails || monthDetails.limit==0){
    await MonthlyModel.findOneAndUpdate({
      month: toMonthWords(new Date().getMonth())+new Date().getFullYear(),
      uid
    }, 
    {$set: {limit:monthlyLimit}},
    {upsert:true, returnNewDocument:true}
    ).then((doc)=>{
    return res.status(201) .json({ err:false, monthDetails:doc});
    })
  }
  else{
    return res.status(201) .json({ err: false, monthDetails});
  }

};
export const editMonthLimit = async (req, res) => {
  try{
    const { uid, monthlyLimit } = req.body;
    await MonthlyModel.findOneAndUpdate({
      month: toMonthWords(new Date().getMonth())+new Date().getFullYear(),
      uid
    }, 
    {$set: {limit:monthlyLimit}}
    ).then(()=>{
    return res.status(201) .json({ err:false});
    })
  }
  catch(err){
    return res.status(201) .json({ err });
  }
};