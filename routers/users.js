import express from "express";
import { body } from "express-validator";
import { userController } from "../controllers/index.js";
const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserDetail);

router.post(
	"/login", // username must be an email
	body("username").isEmail(),
	// password must be at least 5 chars long
	body("password").isLength({ min: 5 }),
	userController.login
);

router.post("/register", userController.register);

export default router;
