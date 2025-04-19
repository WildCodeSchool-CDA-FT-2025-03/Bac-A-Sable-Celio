"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAddRepos = void 0;
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    //id: Joi.string(),
    isPrivate: joi_1.default.boolean().required,
    languages: joi_1.default.array().items(joi_1.default.object({
        size: joi_1.default.number,
        node: joi_1.default.object({ name: joi_1.default.string() }),
    })),
    name: joi_1.default.string(),
    description: joi_1.default.string().required,
    url: joi_1.default.string().required,
});
const validateAddRepos = (req, res, next) => {
    console.info("valeur de req.body dans validate : ", req.body);
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(402).json(error);
    }
    else {
        next();
    }
};
exports.validateAddRepos = validateAddRepos;
