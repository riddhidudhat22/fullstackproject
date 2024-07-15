const express = require('express')
const { salespeoplecontroler } = require('../../../controler')

const router = express.Router();


router.get('/list-salespeople',
    salespeoplecontroler.listselspeople
)

module.exports = router