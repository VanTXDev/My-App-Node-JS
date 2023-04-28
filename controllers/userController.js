import { validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";
import { EventEmitter } from "node:events";
import Exception from "../exceptions/Exception.js";
import HttpStatusCode from "../exceptions/HTTPStatusCode.js";

const myEvent = new EventEmitter();
//listen
myEvent.on("event.register.user", (params) => {
	console.log(`Listening they talk about: ${JSON.stringify(params)} `);
});

const login = async (req, res) => {
	// Finds the validation errors in this request and wraps them in an object with handy functions
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res
			.status(HttpStatusCode.BAD_REQUEST)
			.json({ errors: errors.array() });
	}

	//get user name, password from request
	const { username, pasword } = req.body;

	//call repository
	await userRepository.login(username, pasword);
	res.status(HttpStatusCode.OK).json({
		message: "Login user successfulled",
		data: "User detail"
	});
};

const register = async (req, res) => {
	//destructuring
	const { username, password, name, email, phoneNumber, address } = req.body;
	try {
		const userRegisted = await userRepository.register({
			username,
			password,
			name,
			email,
			phoneNumber,
			address
		});
		//Events Emitter
		myEvent.emit("event.register.user", req.body);
		res.status(HttpStatusCode.INSERT_OK).json({
			message: "Register successfully",
			data: userRegisted
		});
	} catch (exception) {
		res.status(HttpStatusCode.BAD_REQUEST).json({
			message: exception.toString()
		});
	}
};

const getUserDetail = async (req, res) => {
	res.status(HttpStatusCode.OK).json({
		message: "Get user detail successfully",
		data: [{ name: "Quyt", age: 12, mail: "Quytdeptrai@gmail.com" }]
	});
};

const getAllUsers = async (req, res) => {
	res.status(HttpStatusCode.OK).json({
		message: "Get all users successfully",
		data: [
			{ name: "Quyt", age: 12, mail: "Quytdeptrai@gmail.com" },
			{ name: "Cam", age: 18, mail: "Cam@gmail.com" }
		]
	});
};

export default {
	login,
	register,
	getUserDetail,
	getAllUsers
};
