import fastify from "fastify";
import rootRoute from './routes'

const server = fastify({ logger: true });

server.register(rootRoute);

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
