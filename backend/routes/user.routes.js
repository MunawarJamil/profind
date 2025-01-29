import express from "express";
import { loginUser, registerUser, updateProfile } from "../controllers/users.controller.js";
 
import authMiddleware from "../middlewares/auth.middleware.js";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.post("/profile", authMiddleware, updateProfile);







  export default route;