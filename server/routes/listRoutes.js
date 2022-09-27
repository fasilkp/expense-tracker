import express from 'express'
import { AddItem, getItems } from '../controllers/ListController.js';

const router=express.Router()

router.post("/add-item", AddItem);
router.post("/get-items",getItems);



export default router;