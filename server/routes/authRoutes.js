import express from 'express'
import {loginUser} from '../controllers/authController.js'

const router=express.Router()

router.get("/check", (req, res)=>{
    res.send("working")
});
router.get("/login", loginUser);



export default router;