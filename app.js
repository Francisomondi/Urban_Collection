const express = require('express');
const path = require ('path');
const app = express();

//set up path to views
app.use('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req,res)=>{
    res.render('welcome');
});

//listen to a server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}....`));