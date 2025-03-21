import express, { query, type Request, type Response } from "express";

import myRepos from "../../data/myRepos.json";
import { validateAddRepos } from "./repos.validateAddRepos";
import type { MyReposType } from "./repos.type";
const router = express.Router();

let myReposState = myRepos;

// display all repos
router.get("/", (req: Request, res: Response) => {
	console.info("Le client a demande tous les repos");
	res.status(200).json(myReposState);
});

// add a repos
router.post("/", validateAddRepos, (req: Request, res: Response) => {
	console.info("Je suis dans le REPOS", req.body);
	const newId = Math.floor(Math.random() * 1000000).toString();
	myReposState.push({ ...req.body, id: newId });
	res.status(201).json({ id: newId });
});

// display with a query params
router.get("/", (req: Request, res: Response) => {
	console.log("valeur de req.query: ", req.query);

	let result = req.query.url
		? myReposState?.filter((element) => element.url === req.query.url)
		: myReposState;

	result = req.query.isPrivate
		? myReposState.filter(
				(element) => element.isPrivate.toString() === req.query.isPrivate,
			)
		: myReposState;

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
	const repo = myReposState.find(
		(findElt) => findElt.id === req.params.id,
	) as unknown as MyReposType;
	if (repo) {
		res.status(200).json(repo);
	} else {
		res.sendStatus(404);
	}
});

// delete
router.delete("/:Id", (req: Request, res: Response) => {
	console.info(req.params);
	myReposState = myReposState.filter((repo) => repo.id !== req.params.Id);
	res.sendStatus(204);
});

export default router;
