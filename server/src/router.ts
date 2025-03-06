import express, { type Request, type Response } from "express";
import repos from "./repos/repos.controler";

const router = express.Router();

router.use("/", repos);

export default router;
