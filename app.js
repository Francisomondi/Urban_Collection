const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require ('path');
const expressLayouts = require('express-ejs-layouts');  
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');

require("dotenv/config");

mongoose.connect('mongodb://localhost/urban_collection', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (!error) {
            console.log('connected to database');
        } else {
            console.log(`error connecting to the db!!!! ${error}`);
        }
    });


//set up public folder
app.use(express.static(path.join(__dirname, 'public')));

//express session middleware
app.use(session({
    secret: 'francis',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

//express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

//express body-parser 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//set up path to views
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
 app.set('view engine', 'ejs');
 
 

//import routes
const usersRoute = require('./routes/user');
const welcomeRoute = require('./routes/welcome');
const productRoute = require('./routes/product');
const manufactureRoute = require('./routes/manufacture');
const categoryRoute = require('./routes/category');

app.use('/products', productRoute);
app.use('/', welcomeRoute);
app.use('/users', usersRoute);
app.use('/manufactures', manufactureRoute);
app.use('/categories', categoryRoute);


app.get('/dashboard', (req, res) => {
    res.render('./dashboard');
});

//listen to a server
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server started on port ${port}....`));