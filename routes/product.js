const express = require('express');
const router = express.Router();
//model
const Product = require('../models/Product');


//fetch all products
router.get('/', (req,res)=>{
    res.render('products/index');
});

module.exports = router;