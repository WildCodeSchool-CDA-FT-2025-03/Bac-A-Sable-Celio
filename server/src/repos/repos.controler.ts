import express, { type Request, type Response } from "express";

import myRepos from "../../data/myRepos.json";
import { validateAddRepos } from "../repos/repos.validateAddRepos";
import type { MyReposType } from "./repos.type";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.status(200).json(myRepos);
});

router.get("/:id", (req: Request, res: Response) => {
	const oneRepos = myRepos.find(
		(findElementt) => findElementt.id === req.params.id,
	) as unknown as MyReposType;
	if (oneRepos) {
		res.status(200).json(oneRepos);
	} else {
		res.sendStatus(404);
	}
});

router.post("/repos", validateAddRepos, (req: Request, res: Response) => {
	const newId = Math.floor(Math.random() * 1000000).toString();
	myRepos.push({ ...req.body, id: newId });
	res.status(201).json({ id: newId });
});

export default router;
