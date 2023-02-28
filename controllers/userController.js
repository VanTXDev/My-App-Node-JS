import { validationResult } from "express-validator";

const login = async (req, res) => {
	// Finds the validation errors in this request and wraps them in an object with handy functions
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	//user name, password
	const { username, pasword } = req.body;
	res.send("Post login user hahahaaa");
};

const register = async (req, res) => {
	res.send("Post register user");
};

const getUserDetail = async (req, res) => {
	res.send("Get user detail");
};

const getAllUsers = async (req, res) => {
	res.status(200).json({
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
