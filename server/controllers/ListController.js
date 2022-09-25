import ItemModel from "../models/ItemsModel.js";


export const AddItem = async (req, res) => {
  const { category, amount, description } = req.body;
  const newItem = new ItemModel({
    category,
    amount,
    description
  });
  newItem.save((err) => {
    if (err)
      return res
        .status(500)
        .json({ success: false, message: "post upload failed", error: err });
  });
  return res
    .status(201)
    .json({ success: true, message: "post upload successfull", post: newPost });
};