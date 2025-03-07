
import express from 'express';

import turfRouters from './turfRoutes.js';
import userRouters from './userRoutes.js';

const routes = express.Router();

routes.use('/turf', turfRouters);
routes.use('/user', userRouters);


export default routes ;