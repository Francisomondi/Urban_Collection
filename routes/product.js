const express = require('express');
const router = express.Router();
//model
const Product = require('../models/Product');


//fetch all products
router.get('/', async (req, res) => {

    try {
        const products = await Product.find();
        res.render('products/index', {
            products: products
        });

    } catch (error) {
        console.log(`Error finding products`);

    }
});

//get  products
router.get('/add', (req,res)=>{
    res.render('products/add');
});
//post  product
router.post('/add', async (req, res) => {
     const product = new Product({
         name: req.body.name,
         description: req.body.name,
         price: req.body.name,
         manufacture: req.body.name,
         category: req.body.name,
         image: req.body.name,
     });

     try{
         const products = await product.save();
         res.redirect('./products/index', 
         {
             products: products
         });
     }
     catch(error){
         throw error;
     }    
});

router.get('/:id', async(req,res)=>{
    try{
        const products = await Product.findById(req.params.id);
        res.render('./products/show',{products:products});
    }
    catch(error){
        throw error;
    }
   
});

module.exports = router;