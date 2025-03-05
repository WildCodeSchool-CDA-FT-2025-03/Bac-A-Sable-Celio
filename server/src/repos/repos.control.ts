import express, { type Request, type Response } from "express";

import myRepos from "../../data/myRepos.json";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.status(200).json(myRepos);
});

export default router;
