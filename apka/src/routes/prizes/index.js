module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return reply.view('prizes.hbs', {});
  });
};
