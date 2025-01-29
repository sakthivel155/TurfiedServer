import express from 'express';
const router = express.Router();

import statusRoutes from './Status.js';    



router.use('/users', statusRoutes);

export default router;