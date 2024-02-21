const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { rows } = await pool.query('SELECT * FROM user');
        res.status(200).json(rows); 
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router; 