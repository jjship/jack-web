// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const pov = require('point-of-view');
const handlebars = require('handlebars');
const helmet = require('helmet');
const { selectAll } = require('./model');

// fastify.register(helmet);

// Register point-of-view with handlebars
fastify.register(pov, {
  engine: {
    handlebars,
  },
  root: 'src/views',
  layout: 'layouts/main.hbs',
  options: {
    partials: {
      head: 'partials/head.hbs',
      nav: 'partials/nav.hbs',
      body: 'partials/body.hbs',
      footer: 'partials/footer.hbs',
    },
  },
});

// Declare a route
fastify.get('/', (request, reply) => {
  // return await selectAll();
  reply.view('index.hbs', {});
});

// Run the server!
fastify.listen(process.env.PORT || 3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
