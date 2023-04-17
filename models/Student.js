import mongoose, { Schema, ObjectId } from "mongoose";

const Student = mongoose.model(
	"Student",
	new Schema({
		id: {
			type: ObjectId
		},
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
				validator: (v) => isEmail,
				message: "Email is incorrect format"
			}
		},
		language: {
			type: [String] //this is a array of strings
		},
		gender: {
			type: String,
			required: true,
			enum: {
				values: ["male", "female"],
				message: "{VALUE} is not supported"
			}
		},
		phoneNumber: {
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return v.length > 10;
				},
				message: "Phone number is at least 10 characters"
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

export default Student;
