"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const myRepos_json_1 = __importDefault(require("../../data/myRepos.json"));
const languages = express_1.default.Router();
languages.get("/", (req, res) => {
    const languages = myRepos_json_1.default.reduce((acc, repo) => {
        // biome-ignore lint/complexity/noForEach: <explanation>
        repo.languages.forEach((lng) => {
            if (!acc.includes(lng.node.name)) {
                acc.push(lng.node.name);
            }
            return acc;
        });
        return acc;
    }, []);
    res.status(200).json(languages);
});
exports.default = languages;
