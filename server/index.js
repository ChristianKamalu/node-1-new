const express = require('express');
const getProducts = require('./getProducts')

const app = express();

app.get('/api/products', getProducts.getProducts)

app.get(`/api/product/:id`, getProducts.getProductById)

// app.get(`/api/products`, getProducts.getProductByPrice)

const PORT = 4567;
app.listen(PORT, () => console.log(`Welcome to ${PORT}`))