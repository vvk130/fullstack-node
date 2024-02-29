# Full Stack Ecommerce Project

Full Stack Ecommerce Project in development

See the project live: [https://trend-flare.onrender.com/](https://trend-flare.onrender.com/)

https://github.com/vvk130/fullstack-node/assets/80620628/fbeff452-b3f3-4253-87ba-25df113cba8d

## List of Contents

- [How to clone the project](#how-to-clone-project)
- [Technologies Used](#technologies-used)
- [Database structure](#database-structure)
- [Folder Structure](#folder-structure)
- [List of HTTPS Methods](#list-of-https-methods)

## How to clone project

Clone the repository

```
git clone https://github.com/vvk130/fullstack-node.git
```

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

- **GET /api/getproducts**: Retrieve a list of all products.
- **GET /api/getproducts/{id}**: Retrieve a specific product by its ID.
- **GET /api/getbrands/{brand}**: Retrieve a list of products by brandname.

### Discounts

- **GET /api/getdiscounts**: Retrieve a list of all products with discounts.

## Folder Structure

### Backend:

- **Models**: database models
- **Utils**: commonly used functions
- **Dist**: build frontend and assets
- **Api**: api endpoints

### Frontend/src:

- **Assets**
- **Components**
- **Pages**
- **Routing**
- **Utils**
