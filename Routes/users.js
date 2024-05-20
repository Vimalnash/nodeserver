import express from "express";
import { Users } from "../models/users.js";
import { addNewUser, getUserByEmail } from "../Controllers/users.js";
import bcrypt from "bcrypt";

const router = express.Router();

// router.get("/test", async (req, res) => {
//     try {
//         res.status(200).json({ message: "test connection success" })
//     }
//     catch(error) {
//         console.log(error)
//         res.status(500).json({error: "Server Connection Error"})
//     }
// })


router.post("/signup", async (req, res) => {
    try {
        // check if the user is available in DB
        //return an error response
        let user = await getUserByEmail(req);
        if(user) {
            return res.status(400).json({error: "Email Already Exist"});
        }

        // Encrypting your password using Bcrypt.
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //save and register new user in DB
        // return success messages with user details
        user = await addNewUser(req, hashedPassword);
        return res.status(201).json({message: "User Registered Successfully", data: user});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.post("/login", async (req, res)=> {
    try {
        // User Email Available in DB
        const user = await getUserByEmail(req);
        // Not Available returning bad request
        if(!user) {
            return res.status(404).json({error: "Invalid Login Credentials"});        // whu 404 => data not found
        }

        // Password Decryption and Validation
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);

        if(!isValidPassword) {
            return res.status(400).json({error: "Invalid Login Credentials"});
        }

        // Sending User Information with success message
        return res.status(200).json({message: "Successfully LoggedIn", userData: user})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
})




export const userRouter = router;