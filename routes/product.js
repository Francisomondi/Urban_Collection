const express = require('express');
const router = express.Router();
//model
const Product = require('../models/Product');


//fetch all products
router.get('/', async (req, res) => {

    const products= await Product.find();
 res.render('products/index', {products: products});
   
});

//get add products paage
router.get('/add', async(req,res)=>{
    const products= await Product.find();
   res.render("products/add", { products: products });
});

//get add products paage
router.post('/add', async (req, res) => {

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('description', 'description is required').notEmpty();
    req.checkBody('price', 'price is required').notEmpty();
    req.checkBody('manufacture', 'manufacture is required').notEmpty();
    req.checkBody('category', 'category is required').notEmpty();
    req.checkBody('image', 'Image is required').notEmpty();
      

    let products = new Product();
            products.name = req.body.name;
            products.description = req.body.description;
            products.price = req.body.price;
            products.manufacture = req.body.manufacture;
            products.image = req.body.image;
            products.category = req.body.category;

          let errors = req.validationErrors();
          if(errors){
              res.render('products/add',{
                  errors: errors,
                  products: products
              });
          }
          //end of if  
          else{
             try {
                 await products.save();
                 req.flash('success','product added');
                 res.redirect(`/products/${products.id}`);
             } catch (error) {
                 res.render('products/add', {
                     products: products,
                     error:error
                 });
             }
             
          }  
});
////////////////////////////////
router.get('/:id', async(req,res)=>{
    const products = await Product.findById(req.params.id);
   res.render('products/show', {products:products});
});

router.get('/edit/:id', async (req, res) => {
    const products= await Product.findById(req.params.id);
    res.render('products/edit', {products: products});

});


//update product
router.put('/edit/:id', async (req, res) => {
    
});
router.delete("/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
});

module.exports = router;