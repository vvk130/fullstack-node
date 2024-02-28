# Full Stack Ecommerce Project

See the project live: [https://trend-flare.onrender.com/](https://trend-flare.onrender.com/)

https://github.com/vvk130/fullstack-node/assets/80620628/fbeff452-b3f3-4253-87ba-25df113cba8d

## List of Contents

- [How to run project locally](#how-to-run-project-locally)
- [Technologies Used](#technologies-used)
- [Database structure](#database-structure)
- [Folder Structure](#folder-structure)
- [List of HTTPS Methods](#list-of-https-methods)

## How to run project locally

Clone the repository
```
git clone https://github.com/vvk130/fullstack-node.git
```

Run nodemon:
```
nodemon
```
The application should run on port 3005

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

## Folder Structure

#todo

