const express = require('express');
const router = express.Router();
//model
const Product = require('../models/manufacture');


//fetch all products
router.get('/', (req, res) => {
    res.render('manufacture/index');

});

module.exports = router;