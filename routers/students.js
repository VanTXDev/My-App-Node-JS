import express from "express";
import { studentController } from "../controllers/index.js";
const router = express.Router();
router.get("/", studentController.getAllStudents);

router.get("/:id", studentController.getStudentById);

/* 
	Update student information by put or patch
	put will update if data is exist
	patch will update if data is exist and create new if not existed
*/
router.put("/update", studentController.updateStudent);

router.patch("/update-patch", studentController.updateStudent);

router.post("/insert", studentController.insertStudent);
export default router;
