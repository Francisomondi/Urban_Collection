const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('welcome to my page');
});

//listen to a server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}....`));