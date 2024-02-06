const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling all GET requests to /product"
    });
});

router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /product"
    });
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