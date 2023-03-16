const login = async ({ userName, password }) => {
	console.log("Login user in repositories");
};

const register = async ({
	userName,
	password,
	name,
	email,
	phoneNumber,
	address
}) => {
	//valition already done
	console.log("Register user with: \t Name: " + name, "\t Email: " + email);
};

export default {
	login,
	register
};
