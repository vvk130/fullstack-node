const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyParser.json());
const { notFoundHandler, errorHandler } = require('./middleware');
const routes = require('./routes');

const apiRoutes = ['product', 'user', 'discount', 'order', 'shoppingcart'];

apiRoutes.forEach(route => {
    const router = require(`./api/routes/${route}`);
    app.use(`/api/${route}s`, router);
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


