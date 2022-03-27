"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.get("/", async (request, reply) => {
        console.log("got ya!");
        return { hello: "world" };
    });
}
exports.default = routes;
