const express = require('express');
// const path = require('path');
const router  = express.Router();
// const adminData = require("./admin");
// const rootDir  = require("../util/path");
const productController = require('../controller/products')
router.get('/',productController.getProducts);

module.exports = router;