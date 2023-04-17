import mongoose, { Schema, ObjectId } from "mongoose";

const ClassRoom = mongoose.model(
	"ClassRoom",
	new Schema({
		id: { type: ObjectId },
		name: {
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return v.length > 3;
				},
				message: "Class name must be at least 3 characters"
			}
		}
	})
);

export default ClassRoom;
