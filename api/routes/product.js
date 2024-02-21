const express = require('express');
const router = express.Router();
const { pool } = require('../../db');

router.get('/', async (req, res, next) => {
    try {
        const { rows } = await pool.query('SELECT * FROM product');
        res.status(200).json(rows); 
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/women', async (req, res, next) => {
    try {
        const { rows } = await pool.query("SELECT * FROM product WHERE maincategory = 'women'");
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/men', async (req, res, next) => {
    try {
        const { rows } = await pool.query("SELECT * FROM product WHERE maincategory = 'men'");
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/children', async (req, res, next) => {
    try {
        const { rows } = await pool.query("SELECT * FROM product WHERE maincategory = 'children'");
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//ProductByBrand
// router.get('/:brand', async (req, res, next) => {
//     try {
//         const brand = req.params.brand.toLowerCase();
//         const { rows } = await pool.query('SELECT * FROM product WHERE LOWER(brand) = $1', [brand]);
//         if (rows.length === 0) {
//             res.status(404).json({ error: 'Product not found' });
//         } else {
//         res.status(200).json(rows);
//         }
//     } catch (error) {
//         console.error('Error executing query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


router.get('/:productId', async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const { rows } = await pool.query('SELECT * FROM product WHERE id = $1', [productId]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.status(200).json(rows[0]);
        }
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/:productId', (req, res, next) => {
    res.status(201).json({
        message: "Handling POST requests to /product"
    });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Handling PATCH requests to /product"
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Handling DELETE requests to /product"
    });
});

module.exports = router; 