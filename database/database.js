import mongoose from "mongoose";
const connect = async () => {
	try {
		let connection = await mongoose.connect(process.env.MONGO_URI);
		console.log("Connect Mongo DB successfully");
		return connection;
	} catch (error) {
		const { code } = error;
		debugger;
		if (code == 8000) {
			throw new Error("Wrong database's username and password");
		} else if (code == "ENOTFOUND") {
			throw new Error("Wrong server name/connection string");
		}
		throw new Error("Cannot connect to Mongo");
	}
};
export default connect;
