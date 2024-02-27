const express = require('express');
const router = express.Router();
const { pool } = require('../../db');

router.get('/:brand', async (req, res, next) => {
    try {
        const brand = req.params.brand.toLowerCase();
        const { rows } = await pool.query('SELECT * FROM product WHERE LOWER(brand) = $1', [brand]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
        res.status(200).json(rows);
        }
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router; 