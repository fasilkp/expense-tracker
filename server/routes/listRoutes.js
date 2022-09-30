import express from 'express'
import { AddItem, editMonthLimit, getItems, getItemsWithLimit, getMonthDetails } from '../controllers/ListController.js';

const router=express.Router()

router.post("/add-item", AddItem);
router.post("/get-items",getItems);
router.post("/get-recent-items",getItemsWithLimit);
router.post("/get-month-details",getMonthDetails);
router.post("/edit-month-limit",editMonthLimit);



export default router;