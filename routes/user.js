const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
//model
const User = require ('../models/User');


//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {

    try {
        const users = await User.find();
        res.render('users/index', {
            users: users
        });
    } catch (error) {
        res.json({ message: error });
    }
});
router.get('/login', (req, res) => {
    res.render('users/login');
});
router.get('/register',(req, res) => {
    res.render('users/register');
    
});

router.post('/register', (req,res)=>{    
});
module.exports = router;