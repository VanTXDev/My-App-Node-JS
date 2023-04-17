const getAllStudents = async ({ page, size, searchString }) => {
	console.log("Get all students with: \n page: " + page + "\t size:" + size);
};

//language English,Vietnamese,japanese
const insertStudent = async ({
	name,
	email,
	language,
	gender,
	phoneNumber,
	address
}) => {
	//valition already done
	console.log("Register user with: \t Name: " + name, "\t Email: " + email);
};

//language English,Vietnamese,japanese
const updateStudent = async ({
	name,
	email,
	language,
	gender,
	phoneNumber,
	address
}) => {
	//valition already done
	console.log("Update user with: \t Name: " + name, "\t Email: " + email);
};
export default {
	getAllStudents,
	insertStudent,
	updateStudent
};
