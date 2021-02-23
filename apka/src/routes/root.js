module.exports = async (fastify, opts) => {
  // sprawdza czy w ciastkach jest flaga wieku, jeśli nie to /age
  fastify.get('/', (request, reply) => {
    // return await selectAll();
    reply.view('home.hbs', {});
  });
};
