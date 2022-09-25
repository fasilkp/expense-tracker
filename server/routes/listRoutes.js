import express from 'express'
import { AddItem } from '../controllers/ListController.js';

const router=express.Router()

router.post("/add-item", AddItem);



export default router;