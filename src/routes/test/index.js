const model = require('../../model');

module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    const allPosts = await model.selectAll();
    console.log(allPosts);
    return reply.view('test.hbs', {
      allPosts,
    });
  });
};
