const express = require('express');
// const path = require("path");
const router = express.Router();

// const rootDir = require("../util/path");
const productController = require("../controller/products");

router.get('/add-product',productController.getAddProducts);

router.post('/add-product',productController.postAddProducts);

// exports.router = router;
// exports.product = products;

module.exports = router;