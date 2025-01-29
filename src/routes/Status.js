import express from 'express';
const router = express.Router();

// Simple test route
router.get('/status', (req, res) => {
    res.json({ message: "User routes working!" });
});

export default router;