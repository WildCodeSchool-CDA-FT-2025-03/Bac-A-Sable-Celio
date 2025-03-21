import express, { type Request, type Response } from "express";
import myRepos from "../../data/myRepos.json";

const languages = express.Router();

languages.get("/", (req: Request, res: Response) => {
	const languages = myRepos.reduce((acc, repo) => {
		// biome-ignore lint/complexity/noForEach: <explanation>
		repo.languages.forEach((lng) => {
			if (!acc.includes(lng.node.name)) {
				acc.push(lng.node.name);
			}
			return acc;
		});
		return acc;
	}, [] as string[]);

	res.status(200).json(languages);
});

export default languages;
