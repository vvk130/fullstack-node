const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling all GET requests to /discount"
    });
});

module.exports = router; 