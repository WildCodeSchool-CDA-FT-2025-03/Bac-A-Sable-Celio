import express, { type Request, type Response } from "express";
import repos from "./repos/repos.control";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.status(200).send("Tout est ok");
});

// nouveau prefix de route
router.use("/repos", repos);

export default router;
