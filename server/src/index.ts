import express from "express";
import dotenv from "dotenv";
import router from "./router";
dotenv.config();

const app = express();

app.use("/api", router);

app.use(express.json());

const port = process.env.SERVER_PORT;

app.listen(port, () => {
	console.info(`You server running on http://localhost:${port}`);
});
