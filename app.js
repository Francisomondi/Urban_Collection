const express = require('express');
const path = require ('path');
const app = express();
const bodyparser = require("body-parser");

//body-parser middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//set up path to views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//import routes
const templatesRoute= require('./routes/template');

app.use('/templates', templatesRoute);


app.get('/', (req,res)=>{

    const products = [
        {
            id: 1,
            name: 'product 1',
            owner: 'Francis omondi',
            description: 'lorem sbljkfb.m,sbhmnbjhmsdbfjhmnsv'
            
        },
        {
            id: 2,
            name: 'product 2',
            owner: 'Francis omondi',
            description: 'lorem sbljkfb.m,sbhmnbjhmsdbfjhmnsv'

        },
        {
            id: 3,
            name: 'product 3',
            owner: 'Francis omondi',
            description: 'lorem sbljkfb.m,sbhmnbjhmsdbfjhmnsv'

        },
    ];
    res.render('welcome',{
        products: products
    });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

//listen to a server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}....`));