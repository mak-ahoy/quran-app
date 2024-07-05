import express from "express"
import { loginUser, registerUser } from "../controllers/user.js";
import { getSurahVerses, getSurahs } from "../controllers/content.js";

export const userRouter = express.Router();




userRouter.get("/hello", (req, res)=>{res.status(200).json({message: "hello world"})})
userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.get('/get-surahs', getSurahs);
userRouter.post('/get-surahs/surah-info', getSurahVerses);


