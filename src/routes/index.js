
import express from 'express';
import { getAllTurfs } from '../controllers/turfController.js'; 

const router = express.Router();

router.get('/getTurfs', getAllTurfs);

export default router;