
const express = require('express');
const { userscontroler } = require('../../../controler');


const router = express.Router()

router.post('/ragisterusers',
    userscontroler.ragister
);

router.post('/loginusers',
    userscontroler.login
);

router.post('/genrateNewToken',
    userscontroler.newtoken
);
module.exports = router;



  