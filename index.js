const express = require('express');
const path = require('path');
const app = express();
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();


app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev'));

app.use(bodyParser.json());

const pool = new Pool({
    connectionString: process.env.ELEPHANTSQL_URL,
  });

pool.connect((err, client, done) => {
if (err) {
    console.error('Error connecting to the database', err);
} else {
    console.log('Connected to the database');
}
});

const ClothingCategory = {
    Men: "Men",
    Women: "Women",
    Boy: "Boy",
    Girl: "Girl"
};

class Clothing {
    constructor(id, category, subcategory, name, color, price, stockBySize, image_url) {
        this.id = id;
        this.category = category;
        this.subcategory = subcategory;
        this.name = name;
        this.color = color;
        this.price = price;
        this.stockBySize = stockBySize;
        this.image_url = image_url;
    }
}

const DB = [
    new Clothing(1, ClothingCategory.Women, "Shirt", "Ninni Shirt", "Red", 30, { "S": 10, "M": 15, "L": 20 }, "womens-red-sweater.jpg"),
    new Clothing(2, ClothingCategory.Men, "Trouser", "Denim Jeans", "Blue", 50, { "30": 5, "32": 10, "34": 8 }, "mens-blue-jeans.jpg"),
    new Clothing(3, ClothingCategory.Boy, "Beanie", "Beige Beanie", "Beige", 15, { "S": 10, "M": 8, "L": 12 }, "children-boy-beige-beanie.jpg"),
    new Clothing(4, ClothingCategory.Boy, "Collage Pants", "Beige Collage Pants", "Beige", 25, { "30": 5, "32": 8, "34": 10 }, "children-boy-beige-collage-pants.jpg"),
    new Clothing(5, ClothingCategory.Boy, "Beanie", "Gray Beanie", "Gray", 15, { "S": 10, "M": 8, "L": 12 }, "children-boy-gray-beanie.jpg"),
    new Clothing(6, ClothingCategory.Boy, "Collage", "Gray Brooklyn Collage Shirt", "Gray", 35, { "S": 12, "M": 10, "L": 15 }, "children-boy-gray-brooklyn-collage-shirt.jpg"),
    new Clothing(7, ClothingCategory.Boy, "Sweater", "Green Sweater", "Green", 30, { "S": 15, "M": 12, "L": 18 }, "children-boy-green-sweater.jpg"),
    new Clothing(8, ClothingCategory.Boy, "Overall", "Navy Overall", "Navy", 40, { "S": 8, "M": 10, "L": 12 }, "children-boy-navy-overall.jpg"),
    new Clothing(9, ClothingCategory.Girl, "Overall", "Blue Jeans Overall", "Blue", 35, { "S": 10, "M": 12, "L": 15 }, "children-girl-blue-jeans-overall.jpg"),
    new Clothing(10, ClothingCategory.Girl, "Collage", "Navy Hogwarts Collage", "Navy", 25, { "S": 12, "M": 15, "L": 18 }, "children-girl-navy-hogwarts-collage.jpg"),
    new Clothing(11, ClothingCategory.Men, "Blazer", "Beige Blazer", "Beige", 60, { "S": 5, "M": 8, "L": 10 }, "mens-beige-blazer.jpg"),
    new Clothing(12, ClothingCategory.Men, "Coat", "Beige Coat", "Beige", 70, { "S": 5, "M": 8, "L": 10 }, "mens-beige-coat.jpg"),
    new Clothing(13, ClothingCategory.Men, "Dress Shirt", "Burgundy Dress Shirt", "Burgundy", 45, { "S": 10, "M": 12, "L": 15 }, "mens-burgundy-dress-shirt.jpg"),
    new Clothing(14, ClothingCategory.Men, "Hoodie", "Burgundy Hoodie", "Burgundy", 55, { "S": 15, "M": 18, "L": 20 }, "mens-burgundy-hoodie.jpg"),
    new Clothing(15, ClothingCategory.Men, "T-Shirt", "White Basic T-Shirt", "White", 25, { "S": 20, "M": 25, "L": 30 }, "mens-white-basic-t-shirt.jpg"),
    new Clothing(16, ClothingCategory.Men, "Hoodie", "White Hoodie", "White", 40, { "S": 15, "M": 18, "L": 20 }, "mens-white-hoodie.jpg"),
    new Clothing(17, ClothingCategory.Men, "Pants", "White Pants", "White", 35, { "30": 8, "32": 10, "34": 12 }, "mens-white-pants.jpg"),
    new Clothing(18, ClothingCategory.Girl, "Sweater", "Red Sweater", "Red", 30, { "S": 12, "M": 15, "L": 18 }, "womens-red-sweater.jpg"),
    new Clothing(19, ClothingCategory.Women, "T-Shirt", "White Basic T-Shirt", "White", 25, { "S": 20, "M": 25, "L": 30 }, "womens-white-basic-t-shirt.jpg"),
    new Clothing(20, ClothingCategory.Women, "Dress", "White T-Shirt Dress", "White", 35, { "S": 15, "M": 18, "L": 20 }, "womens-white-t-shirt-dress.jpg"),
];

app.get('/', (req,res) => {
    res.send("Homepage")
});

app.get("/api", (req, res) => {
    res.json(DB);
});

app.get("/items/:item_id", (req, res) => {
    const item_id = parseInt(req.params.item_id);
    const q = req.query.q || null;
    res.json({ item_id, q });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


