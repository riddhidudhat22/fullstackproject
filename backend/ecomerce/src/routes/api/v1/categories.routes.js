
const express = require('express');
const { categoriescontroler } = require('../../../controler');

const router = express.Router()

router.get('/get-category/:categori_id',
categoriescontroler.getcategories
);

router.get('/list-category',
categoriescontroler.listcategories
);

router.post('/add-category',
categoriescontroler.addcategories
);

router.put('/update-category/:categori_id',
categoriescontroler.udatecategories 
);

router.delete('/delete-category/:categori_id',
categoriescontroler.deletecategories
);

module.exports = router;