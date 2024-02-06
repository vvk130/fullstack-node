const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(bodyParser.json());

const productRoutes = require('./api/routes/product');
// const userRoutes = require('./api/routes/user');
// const discountRoutes = require('./api/routes/discount');
//const ordersRoutes = require('./api/routes/order');
// const shoppingCartRoutes = require('./api/routes/shoppingCart');

app.use('/api/products', productRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/discount', discountRoutes);
// app.use('/api/shoppingCart', shoppingCartRoutes);

module.exports = app; 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


