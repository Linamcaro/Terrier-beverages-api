(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    // Define the middleware layer used by controller
    var ProductMiddleware = require('./product.module')().ProductMiddleware;

    // Method post (Add a product)
    router.post('/',
        ProductMiddleware.addProduct,
        function (req, res) {
            res.status(201).json(req.response);
        });

    // Method get (Get all products)
    router.get('/',
        ProductMiddleware.getProducts,
        function (req, res) {
            res.status(200).json(req.response);
        });

    // Method get (Get a product by id)
    router.get('/:productId',
        ProductMiddleware.getProductById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    // Method put (Update a product by id)
    router.put('/:productId',
        ProductMiddleware.modifyProduct,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    // Method delete (Delete a product by id)
    router.delete('/:productId',
        ProductMiddleware.removeProduct,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();