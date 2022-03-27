import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRegisterOptions,
} from "fastify";

export default async function routes(
  fastify: FastifyInstance,
  options?: FastifyRegisterOptions<FastifyPluginOptions>
) {
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });
}
