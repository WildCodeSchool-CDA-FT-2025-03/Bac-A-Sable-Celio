import express, { query, type Request, type Response } from "express";

import myRepos from "../../data/myRepos.json";
import { validateAddRepos } from "../repos/repos.validateAddRepos";
import type { MyReposType } from "./repos.type";
const router = express.Router();

// display all repos
router.get("/", (req: Request, res: Response) => {
	res.status(200).json(myRepos);
});

// add a repos
router.post("/repos", validateAddRepos, (req: Request, res: Response) => {
	console.info("Je suis dans le REPOS", req.body);
	const newId = Math.floor(Math.random() * 1000000).toString();
	myRepos.push({ ...req.body, id: newId });
	res.status(201).json({ id: newId });
});

// display with a query params
router.get("/repos", (req: Request, res: Response) => {
	console.log("valeur de req.query: ", req.query);

	let result = req.query.url
		? myRepos?.filter((element) => element.url === req.query.url)
		: myRepos;

	result = req.query.isPrivate
		? myRepos.filter(
				(element) => element.isPrivate.toString() === req.query.isPrivate,
			)
		: myRepos;

	const nbLimit = Number.parseInt(`${req.query.limit}`);
	if (req.query.limit && result.length > nbLimit) {
		result = result.slice(0, nbLimit);
	}

	// Query params

	if (req.query.fields) {
		const fields =
			typeof req.query.fields === "string" ? req.query.fields.split(",") : [];
		console.info("valeurs de fields : ", fields);

		result = result.map((element: MyReposType) => {
			const rr = fields.reduce(
				(acc, field) => ({
					// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
					...acc,
					[field]: element[field as keyof MyReposType],
				}),
				{},
			);
			return rr;
		}) as MyReposType[];
	}
	res.status(200).json(result);
});

// display a repos with id
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
export default router;
