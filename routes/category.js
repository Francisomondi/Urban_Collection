const express = require('express');
const router = express.Router();
//model
const Category = require('../models/Category');

//fetch all categories
router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render("categories/index", { categories: categories });
});
//get add categories paage
router.get('/add', async(req,res)=>{
    const categories= await Category.find();
   res.render("categories/add", { categories: categories });
});

//get add categories paage
router.post('/add', async (req, res) => {

    req.checkBody('name', 'Name is required').notEmpty();
    
      

    let categories = new Category();
            categories.name = req.body.name;
            

          let errors = req.validationErrors();
          if(errors){
              res.render('categories/add',{
                  errors: errors,
                  categories: categories
              });
          }
          //end of if  
          else{
             try {
                 await categories.save();
                 req.flash('success','Category added');
                 res.redirect(`/categories/${categories.id}`);
             } catch (error) {
                 res.render('categories/add', {
                     categories: categories,
                     error:eror
                 });
             }
             
          }  
});
////////////////////////////////
router.get('/:id', async(req,res)=>{
    const categories = await Category.findById(req.params.id);
   res.render('categories/show', {categories:categories});
});

router.get('/edit/:id', async (req, res) => {
    const categories= await Category.findById(req.params.id);
    res.render('categories/edit', {categories: categories});

});


//update Category
router.put('/edit/:id', async (req, res) => {
    
});
router.delete("/:id", async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/categories');
});

module.exports = router;