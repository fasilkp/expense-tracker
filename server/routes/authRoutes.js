import express from 'express'
import {checkLoggedIn, loginUser, registerUser} from '../controllers/authController.js'

const router=express.Router()

router.get("/check", (req, res)=>{
    res.send("working")
});
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-logged-in", checkLoggedIn);



export default router;