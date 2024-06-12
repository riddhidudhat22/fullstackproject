
const express = require('express');
const { product } = require('../../../controler');

const router = express.Router()

router.get('/get-product/:product_id',
    product.getproducts
);

router.get('/list-product',
    product.listproducts
);

router.post('/add-product',
    product.addproducts
);

router.put('/update-product/:product_id',
    product.udateproduct
);

router.delete('/delete-product/:product_id',
    product.deleteproduct
);

module.exports = router;