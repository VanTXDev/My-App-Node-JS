import mongoose from "mongoose";
import Exception from "../exceptions/Exception.js";
import { OuputType, print } from "../helpers/print.js";

const connect = async () => {
	try {
		let connection = await mongoose.connect(process.env.MONGO_URI);
		print("Connect mongoose successfully", OuputType.SUCCESS);
		return connection;
	} catch (error) {
		const { code } = error;
		//debugger;
		if (code == 8000) {
			throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD);
		} else if (code == "ENOTFOUND") {
			throw new Exception(Exception.WRONG_CONNECTION_STRING);
		}
		throw new Exception(Exception.WRONG_CONNECTION_MONGODB);
	}
};
export default connect;
