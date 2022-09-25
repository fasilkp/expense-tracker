import express from 'express'
// import {loginUser, registerUser} from '../controllers/authController.js'

const router=express.Router()

router.post("/add-item", registerUser);



export default router;