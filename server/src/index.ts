import express from "express";
import dotenv from "dotenv/config";
import router from "./router";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api", router);

app.use(express.json());

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
	console.info(`You server running on http://localhost:${port}`);
});
