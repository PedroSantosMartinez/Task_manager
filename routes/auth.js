import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { ensureGuest } from "../middleware/auth.js";

const router = express.Router();

router.get('/guest-login', ensureGuest, (req, res) => {

    res.render('/all', {message: req.flash()});
});


router.get('/login', ensureGuest, (req, res) => {

    const { username, email, password } = req.body

    try{
    // query the database for the user email
    const user = User.findOne{(
        where: { email },
        attribute: {'id', 'username', 'email', 'password_hash'}
    
    });
        const validpwd = await bcrypt.compare(password, User.password_hash);
        // if the password doesn't match, send a 401 error
        if (!validpwd) {
            return flash({message: "try again, username or password is incorrect"}
        
        } else {
            res.redirect({dashboard}, {all-task});
        }
            // socket.io

    } catch (err){
        console.error("ERROR::", e.message);
    }

});