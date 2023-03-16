import express from "express";
import * as dotenv from "dotenv";
dotenv.config(); //must have to use environment variables
import connect from "./database/database.js";
import { userRouter, studentRouter } from "./routers/index.js";

//init app express
const app = express();

app.use(express.json());
const PORT = process.env.PORT ?? 3000;

//router
app.use("/users", userRouter);
app.use("/students", studentRouter);

app.get("/", (req, res) => {
	res.send("Response from Root router 3");
});

app.listen(PORT, async () => {
	await connect();
	console.log("Listening on Port: " + PORT);
});
