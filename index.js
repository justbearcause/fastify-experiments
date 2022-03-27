"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const server = (0, fastify_1.default)({ logger: true });
server.register(routes_1.default);
server.listen(3000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
