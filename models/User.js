import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
	"User",
	new Schema({
		id: { type: ObjectId },
		name: {
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return v.length > 3;
				},
				message: "Name is required"
			}
		},
		email: {
			type: String,
			required: true,
			validate: {
				validator: (value) => isEmail,
				message: "Email is required"
			}
		},
		username: {
			type: String,
			required: true,
			validate: {
				validator: (value) => value.length > 6,
				message: "Username is required"
			}
		},
		password: {
			//hashed/encrypted password
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return v.length > 8 && v.length < 16;
				},
				message: "Password is required"
			}
		},
		phoneNumber: {
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return v.length === 10;
				},
				message: "Phone number is required"
			}
		},
		address: {
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return v.length > 0;
				},
				message: "Address is required"
			}
		}
	})
);
