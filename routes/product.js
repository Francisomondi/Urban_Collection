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
         res.render('./products/index', 
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
        res.render('./products/show',
            {
                products:products
            });
    }
    catch(error){
        throw error;
    }
   
});
router.get('/edit/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.render('products/edit',
            {
                products: products
            });
    }
    catch (error) {
        throw error;
    }

});


//update product
router.post('/edit/:id', async (req, res) => {
    const products = {};
        products.name= req.body.name;
        products.description= req.body.description;
        products.price= req.body.price;
        products.manufacture= req.body.manufacture;
        products.category= req.body.category;
        products.image= req.body.image;
    
     const querry= {_id: req.params.id};
     Product.updateOne(querry,products,(error)=>{
         if(error){
             throw error;
         }
         else{
             res.render('welcome',{products:products});
         }

     });   
   
});


module.exports = router;