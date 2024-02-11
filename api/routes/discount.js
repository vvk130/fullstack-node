const express = require('express');
const router = express.Router();
const { pool } = require('../../db');

router.get('/', async (req, res, next) => {
    try {
        const { rows } = await pool.query('SELECT * FROM product WHERE discount IS NOT NULL');
        res.status(200).json(rows); 
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router; 

