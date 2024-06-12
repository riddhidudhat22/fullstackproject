
const express = require('express');
const { subcategoriescontroler } = require('../../../controler');
// const { subcategoriescontroler } = require('../../../controler');

const router = express.Router()

router.get('/get-subcategory/:subcategori_id',
    subcategoriescontroler.getsubcategores
);

router.get('/list-subcategory',
    subcategoriescontroler.listsubcategories
);

router.post('/add-subcategory',
    subcategoriescontroler.addsubcategories
);

router.put('/update-subcategory/:subcategori_id',
subcategoriescontroler.updatesubcategori
);

router.delete('/delete-subcategory/:subcategori_id',
    subcategoriescontroler.deletecsubategori
);

router.get('/getsubcategoridata-by-categorydata/:categori_id',
    subcategoriescontroler.getsubcategoridatawith
)

module.exports = router;