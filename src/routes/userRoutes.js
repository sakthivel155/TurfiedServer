
import express from 'express';

import { userRedigter , userLogin} from '../controllers/userController.js';
const userRoutes = express.Router();


//user operation Routes
userRoutes.post('/signup', userRedigter);
userRoutes.post('/login', userLogin);
export default userRoutes;