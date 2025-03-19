import * as turfModel from '../models/turfModel.js';
const getAllTurfs = async (req, res) => {
  try {
    
    const turfs = await turfModel.getTurfs();
    res.json(turfs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export {getAllTurfs};