const express = require('express')

const router = express.Router();

const categoriesRouter = require('./categories.routes');
router.use("/categories", categoriesRouter)

const subcategoriesRouter = require('./subcategories.routes');
router.use("/subcategories", subcategoriesRouter)

const productRouter = require('./products.routes');
router.use("/products", productRouter)

module.exports = router;