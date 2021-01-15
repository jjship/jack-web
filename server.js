// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const { selectAll } = require('./model');

// Register point-of-view with handlebars
fastify.register(require('point-of-view'), {
  engine: {
    handlebars: require('handlebars')
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return await selectAll();
});

// Run the server!
fastify.listen(process.env.PORT || 3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
