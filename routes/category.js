const express = require('express');
const router = express.Router();
//model
const Product = require('../models/Category');


//fetch all products
router.get('/', (req, res) => {
    res.render('categories/index');
});

module.exports = router;