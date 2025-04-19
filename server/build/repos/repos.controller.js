"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const myRepos_json_1 = __importDefault(require("../../data/myRepos.json"));
const repos_validateAddRepos_1 = require("./repos.validateAddRepos");
const router = express_1.default.Router();
let myReposState = myRepos_json_1.default;
// display all repos
router.get("/", (req, res) => {
    console.info("Le client a demande tous les repos depuis le continer api !!!");
    res.status(200).json(myReposState);
});
// add a repos
router.post("/", repos_validateAddRepos_1.validateAddRepos, (req, res) => {
    console.info("Je suis dans le REPOS", req.body);
    const newId = Math.floor(Math.random() * 1000000).toString();
    myReposState.push(Object.assign(Object.assign({}, req.body), { id: newId }));
    res.status(201).json({ id: newId });
});
// display with a query params
router.get("/", (req, res) => {
    console.log("valeur de req.query: ", req.query);
    let result = req.query.url
        ? myReposState === null || myReposState === void 0 ? void 0 : myReposState.filter((element) => element.url === req.query.url)
        : myReposState;
    result = req.query.isPrivate
        ? myReposState.filter((element) => element.isPrivate.toString() === req.query.isPrivate)
        : myReposState;
    const nbLimit = Number.parseInt(`${req.query.limit}`);
    if (req.query.limit && result.length > nbLimit) {
        result = result.slice(0, nbLimit);
    }
    // Query params
    if (req.query.fields) {
        const fields = typeof req.query.fields === "string" ? req.query.fields.split(",") : [];
        console.info("valeurs de fields : ", fields);
        result = result.map((element) => {
            const rr = fields.reduce((acc, field) => (Object.assign(Object.assign({}, acc), { [field]: element[field] })), {});
            return rr;
        });
    }
    res.status(200).json(result);
});
// display a repos with id
router.get("/:id", (req, res) => {
    const repo = myReposState.find((findElt) => findElt.id === req.params.id);
    if (repo) {
        res.status(200).json(repo);
    }
    else {
        res.sendStatus(404);
    }
});
// delete
router.delete("/:Id", (req, res) => {
    console.info(req.params);
    myReposState = myReposState.filter((repo) => repo.id !== req.params.Id);
    res.sendStatus(204);
});
exports.default = router;
