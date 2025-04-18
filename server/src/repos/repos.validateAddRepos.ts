import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import { MyReposType } from "./repos.type";

import Joi from "joi";

const schema = Joi.object({
	//id: Joi.string(),
	isPrivate: Joi.boolean().required,
	languages: Joi.array().items(
		Joi.object({
			size: Joi.number,
			node: Joi.object({ name: Joi.string() }),
		}),
	),
	name: Joi.string(),
	description: Joi.string().required,
	url: Joi.string().required,
});

const validateAddRepos = (req: Request, res: Response, next: NextFunction) => {
	console.info("valeur de req.body dans validate : ", req.body);

	const { error } = schema.validate(req.body);

	if (error) {
		res.status(402).json(error);
	} else {
		next();
	}
};
export { validateAddRepos };
