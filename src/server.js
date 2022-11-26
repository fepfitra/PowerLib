/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');
const route = require('./routes');

const server = new Hapi.Server();
server.connection({
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  port: 5000,
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

server.route(route);

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
