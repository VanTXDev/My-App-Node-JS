import { validationResult } from "express-validator";

const getAllStudents = async (req, res) => {
	res.status(500).json({
		message: "Can not get students"
	});
};

const getStudentById = async (req, res) => {};

const updateStudent = async (req, res) => {};

const insertStudent = async (req, res) => {};

export default {
	getAllStudents,
	getStudentById,
	updateStudent,
	insertStudent
};
