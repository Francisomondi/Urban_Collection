const express = require ('express');
const router =  express.Router();

router.get('/', (req, res) => {

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
    res.render('welcome', {
        products: products
    });
});


module.exports = router;