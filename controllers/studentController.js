import { validationResult } from "express-validator";
import { EventEmitter } from "node:events";
import HttpStatusCode from "../exceptions/HTTPStatusCode.js";
import { studentsRepository } from "../repositories/index.js";

const myEvent = new EventEmitter();

const getAllStudents = async (req, res) => {
	res.status(HttpStatusCode.OK).json({
		message: "Get all students",
		data: [
			{ name: "Quyt", age: 12, mail: "Quytdeptrai@gmail.com" },
			{ name: "Cam", age: 18, mail: "Cam@gmail.com" }
		]
	});
};

const getStudentById = async (req, res) => {
	res.status(HttpStatusCode.OK).json({
		message: "Get student by id",
		data: {
			name: "Quyt",
			age: 12,
			mail: "Quytdeptrai@gmail.com"
		}
	});
};

const updateStudent = async (req, res) => {
	//destructuring
	const { name, email, language, gender, phoneNumber, address } = req.body;
	await studentsRepository.register({
		name,
		email,
		language,
		gender,
		phoneNumber,
		address
	});
	//Events Emitter
	myEvent.emit("event.update.student", req.body);
	res.status(HttpStatusCode.INSERT_OK).json({
		message: "Update successfully"
	});
};

const insertStudent = async (req, res) => {
	//destructuring
	const { name, email, language, gender, phoneNumber, address } = req.body;
	await studentsRepository.register({
		name,
		email,
		language,
		gender,
		phoneNumber,
		address
	});
	//Events Emitter
	myEvent.emit("event.update.student", req.body);
	res.status(HttpStatusCode.INSERT_OK).json({
		message: "Update successfully"
	});
};

export default {
	getAllStudents,
	getStudentById,
	updateStudent,
	insertStudent
};
