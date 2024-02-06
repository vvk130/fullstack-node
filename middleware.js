const express = require('express');
const path = require('path');

const notFoundHandler = (req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
};

const errorHandler = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
};

module.exports = { notFoundHandler, errorHandler };