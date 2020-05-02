const express = require('express');
const Users = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
       const users = await Users.find();
       res.json(users); 
    } 
    catch (error) {
        throw error;
    }
});

router.get("/register", (req, res) => {
    res.send('this the register page');
    
});

router.get("/login", (req, res) => {
    res.send('this the login page');

});

//create user
router.post("/register", async (req, res) => {
    const users = new Users({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone

     

    });
    let errors = [];
    //check required fields
    if(!fullname || !username || !email || phone){
        errors.push({msg: 'all fields reqired'});
    }

    //chek if passwords match
    if(password != password2){
        errors.push({msg:'passwords do not match'});
    }

    try{
        const savedUser = await users.save();
        res.json(savedUser);

    }catch(error){
        throw error;
    }   
});

//get back a specific user
router.get("/:id", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

//edit post
router.get("/edit/:id", async (req, res) => {
    try {
        
    } catch (error) {
       
    }
});

//update posts
router.post("/edit/:id", async (req, res) => {
    
     try {
     }catch(error){
        
     }
});

//remove posts
router.delete("/:id", async (req, res) => {
    
});

module.exports = router;