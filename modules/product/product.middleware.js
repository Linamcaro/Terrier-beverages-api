(function () {
    'use strict';

    // Define endpoints of the API
    module.exports = {
        addProduct: addProduct,
        getProducts: getProducts,
        getProductById: getProductById,
        modifyProduct: modifyProduct,
        removeProduct: removeProduct
    };

    // Define the service layer used by middleware
    var ProductService = require('./product.module')().ProductService;
    const { BadRequest } = require('../util/errors');

    // Method Add a Product
    function addProduct(req, res, next) {
        // Get product Values of the request body
        const { code, description, unitValue, state } = req.body;
        try{
            // Validate required fields
            if (!code) {
                throw new BadRequest('Missing required fields: Code');
            }
            else if(!description) {
                throw new BadRequest('Missing required fields: Description');    
            }
            else if(!unitValue) {
                throw new BadRequest('Missing required fields: Unit Value');    
            }
            else if(!state) {
                throw new BadRequest('Missing required fields: State');    
            }

            // Call service (Add a Product)
            ProductService.createProduct(req.body)
            .then(success)
            .catch(failure);

            function success(data) {
                req.response = data;
                next();
            }
        
            function failure(error) {
                next(error);
            }
        }catch(err){
            next(err)
        }      

    }

    // Method Get all products
    function getProducts(req, res, next) {

        // Call service (Get all products)
        ProductService.fetchProducts()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    // Method Get a product by id
    function getProductById(req, res, next) {

        // Call service (Get a product by id)
        ProductService.fetchProductById(req.params.productId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    // Method Update a product by id
    function modifyProduct(req, res, next) {
        // Get product Values of the request body
        const { code, description, unitValue, state } = req.body;
        try{
            // Validate required fields
            if (!code) {
                throw new BadRequest('Missing required fields: Code');
            }
            else if(!description) {
                throw new BadRequest('Missing required fields: Description');    
            }
            else if(!unitValue) {
                throw new BadRequest('Missing required fields: Unit Value');    
            }
            else if(!state) {
                throw new BadRequest('Missing required fields: State');    
            }
            
            // Call service (Update a product by id)
            ProductService.updateProduct(req.params.productId, req.body)
                .then(success)
                .catch(error);

            function success(data) {
                req.response = data;
                next();
            }

            function error(err) {
                next(err);
            }
        }catch(err){
            next(err)
        }
    }

    // Method Delete a product by id
    function removeProduct(req, res, next) {

        // Call service (Delete a product by id)
        ProductService.deleteProduct(req.params.productId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();
