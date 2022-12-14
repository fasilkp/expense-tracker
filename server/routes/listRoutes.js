import express from 'express'
import { AddItem, editDefaultMonthLimit, editMonthLimit, getAllMonthDetails, getItems, getItemsWithLimit, getMonthDetails } from '../controllers/ListController.js';

const router=express.Router()

router.post("/add-item", AddItem);
router.post("/get-items",getItems);
router.post("/get-recent-items",getItemsWithLimit);
router.post("/get-month-details",getMonthDetails);
router.post("/get-all-month-details",getAllMonthDetails);
router.post("/edit-month-limit",editMonthLimit);
router.post("/edit-default-month-limit",editDefaultMonthLimit);



export default router;