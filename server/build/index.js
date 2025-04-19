"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "http://localhost:4173" }));
app.use("/api", router_1.default);
app.use(express_1.default.json());
const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => {
    console.info(`You server running on http://localhost:${port}`);
});
