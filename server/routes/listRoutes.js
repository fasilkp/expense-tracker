import express from 'express'
import { AddItem, getItems, getItemsWithLimit } from '../controllers/ListController.js';

const router=express.Router()

router.post("/add-item", AddItem);
router.post("/get-items",getItems);
router.post("/get-recent-items",getItemsWithLimit);



export default router;