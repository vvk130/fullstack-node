# Full Stack Ecommerce Project

See the project live: [https://trend-flare.onrender.com/](https://trend-flare.onrender.com/)

## List of Contents

- [Technologies Used](#technologies-used)
- [Database structure](#database-structure)
- [List of HTTPS Methods](#list-of-https-methods)

## Technologies Used

- Javascript
- Node.js
- PostgreSQL (database pooling)
- React.js
- Material UI Components / Own components

## Database structure

![alt text](https://github.com/vvk130/fullstack-node/blob/main/models/database_final2.png)

## List of HTTPS Methods

### Products
- **GET /products**: Retrieve a list of all products.
- **GET /products/{id}**: Retrieve a specific product by its ID.
- **POST /products**: Create a new product.
- **PUT /products/{id}**: Update an existing product.
- **DELETE /products/{id}**: Delete a product by its ID.

### Orders
- **GET /orders**: Retrieve a list of all orders.
- **GET /orders/{id}**: Retrieve a specific order by its ID.
- **POST /orders**: Create a new order.
- **PUT /orders/{id}**: Update an existing order.
- **DELETE /orders/{id}**: Delete an order by its ID.

### Discounts
- **GET /api/getdiscounts**: Retrieve a list of all products with discounts.

### Shopping Carts
- **GET /carts**: Retrieve a list of all shopping carts.
- **GET /carts/{id}**: Retrieve a specific shopping cart by its ID.
- **POST /carts**: Create a new shopping cart.
- **PUT /carts/{id}**: Update an existing shopping cart.
- **DELETE /carts/{id}**: Delete a shopping cart by its ID.

### Users
- **GET /users**: Retrieve a list of all users.
- **GET /users/{id}**: Retrieve a specific user by their ID.
- **POST /users**: Create a new user.
- **PUT /users/{id}**: Update an existing user.
- ~**DELETE /users/{id}**: Delete a user by their ID.~

## Self-evaluation, things project is missing, TODOs

- Project was not SEO optimized, as it was not the main goal of this project. (url names, links structure, sitemap, metadescriptions, robots.txt, possibly soft 404 (?)) 
- Some components that were used only one time, and were still placed in the components folder (could be placed in pages folder)
- Components could have been built to be more reusable 
- API call code was too verbose
- Files could have todo in them if they were not finished, to ensure better control over the tasks in progress
- CSS was sometimes placed in a file, sometimes as style={{}}. More unified approach would have been great.
- Testing was missing from the projects
- No caching in the project
+ Error handling was on place
