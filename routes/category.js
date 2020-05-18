const express = require('express');
const router = express.Router();
//model
const Product = require('../models/Category');


//fetch all products
router.get('/', async (req, res) => {
    res.render('category/index')

});

//get  products
router.get('/add', (req, res) => {

});
////////////////////////////////
router.get('/:id', async (req, res) => {


});
router.get('/edit/:id', async (req, res) => {


});


//update product
router.post('/edit/:id', async (req, res) => {

});




module.exports = router;