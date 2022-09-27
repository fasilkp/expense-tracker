import ItemModel from "../models/ItemsModel.js";


export const AddItem = async (req, res) => {
  const { category, amount, description, uid } = req.body;
  const newItem = new ItemModel({
    category,
    amount,
    description,
    uid
  });
  newItem.save((err) => {
    if (err)
      return res
        .status(500)
        .json({ err: true, message: "list add   failed", error: err });
  });
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