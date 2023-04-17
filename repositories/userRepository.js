import { OuputType, print } from "../helpers/print.js";
import { User } from "../models/index.js";
import Exception from "../exceptions/Exception.js";
import bcrypt from "bcrypt";

const login = async ({ userName, password }) => {
	print("Login user in repositories", OuputType.INFORMATION);
};

const register = async ({
	userName,
	password,
	name,
	email,
	phoneNumber,
	address
}) => {
	try {
		let existingUser = await User.findOne({ email }).exec();
		if (!!existingUser) {
			throw new Exception(Exception.USER_ALREADY_EXIST);
		}
		//encrypt password
		// const isMatchPassword = await bcrypt.compare(
		// 	password,
		// 	existingUser.password
		// );
		// if (!isMatchPassword) {
		//     throw new Exception(Exception.WRONG_PASSWORD);
		// }

		const hashedPassword = await bcrypt.hash(
			password,
			parseInt(process.env.SALT_ROUND)
		);
		const newUser = new User.create({
			name,
			email,
			userName,
			password: hashedPassword,
			phoneNumber,
			address
		});
		// await newUser.save();
		return newUser;
	} catch (exceptions) {
		//check model validation here
		throw new Exception(Exception.REGISTER_USER_FAILED);
	}
	// print("Register user in repositories successfully", OuputType.SUCCESS);
	//valition already done
	// console.log("Register user with: \t Name: " + name, "\t Email: " + email);
};

export default {
	login,
	register
};
