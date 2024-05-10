import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';

const server = express();
injectRoutes(server);
startServer(server);

export default server;
