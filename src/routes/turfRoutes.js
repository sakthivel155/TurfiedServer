
import express from 'express';
import { getAllTurfs } from '../controllers/turfController.js'; 
const turfRoutes = express.Router();

turfRoutes.get('/getTurfs', getAllTurfs);



export default turfRoutes;