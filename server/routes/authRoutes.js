import express from 'express'
import {checkLoggedIn, loginUser, logoutUser, registerUser} from '../controllers/authController.js'

const router=express.Router()

router.get("/check", (req, res)=>{
    res.send("working")
});
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-logged-in", checkLoggedIn);
router.post("/logout", logoutUser);



export default router;