import { Router } from "express";
import { findUsers, login, logout, signup, searchUsers } from "../controllers/userController.js";
import isLogin from "../middlewares/isLogin.js";

const router = Router();

// User signup or register route
router.post("/signup", signup);

// User Login or signin route
router.post("/login", login);

// User logout or signout route
router.post("/logout", logout);

// Route to search users based on query
router.get("/search-users", isLogin, searchUsers);

export default router;