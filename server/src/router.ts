import express, { type Request, type Response } from "express";
import repos from "./repos/repos.controller";
import languages from "./languages/languages.controller";

const router = express.Router();

router.use("/repos", repos);

router.use("/languages", languages);

export default router;
