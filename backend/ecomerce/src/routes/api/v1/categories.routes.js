
const express = require('express');
const { categoriescontroler } = require('../../../controler');
const upload = require('../../../middleware/upload');

const router = express.Router()

router.get('/get-category/:categori_id',
    categoriescontroler.getcategories
);

router.get('/list-category',
    categoriescontroler.listcategories
);

router.post('/add-category',
    upload.single("image"),
    categoriescontroler.addcategories
);

router.put('/update-category/:categori_id',
    categoriescontroler.udatecategories
);

router.delete('/delete-category/:categori_id',
    categoriescontroler.deletecategories
);

module.exports = router;