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
        .json({ success: false, message: "list add   failed", error: err });
  });
  return res
    .status(201)
    .json({ success: true, message: "list add successfull", item:newItem });
};