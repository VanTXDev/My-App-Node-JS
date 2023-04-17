import { print, OuputType } from "../helpers/print.js";

export default class Exception extends Error {
	static WRONG_DB_USERNAME_PASSWORD =
		"Wrong database's username and password";
	static WRONG_CONNECTION_STRING = "Wrong server name/connection string";
	static WRONG_CONNECTION_MONGODB = "Cannot connect to MongoDB";
	static USER_ALREADY_EXIST = "User already exists";
	static REGISTER_USER_FAILED = "Can't register user";

	constructor(message) {
		super(message); //call constructer of parent class (Error)
		print(message, OuputType.ERROR);
	}
}
