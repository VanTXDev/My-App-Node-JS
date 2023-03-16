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
	console.log("insert student");
};
export default {
	getAllStudents,
	insertStudent
};
