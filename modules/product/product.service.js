(function () {
    'use strict';

    // Define services of the API    
    module.exports = {
        createProduct: createProduct,
        fetchProducts: fetchProducts,
        fetchProductById: fetchProductById,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct
    };

    // Define the Model for the Product
    var ProductModel = require('./product.module')().ProductModel;

    // Method Add a Product
    function createProduct(product) {
        return ProductModel.create(product);
    }

    // Method Get all products
    function fetchProducts() {
        return ProductModel.find({})
            .exec();
    }

    // Method Get a product by id
    function fetchProductById(productId) {
        return ProductModel.findById(productId)
            .exec();
    }

    // Method Update a product by id
    function updateProduct(productId, product) {
        return ProductModel
            .findByIdAndUpdate(productId, product, {new: true})
            .exec();
    }

    // Method Delete a product by id
    function deleteProduct(productId) {
        return ProductModel
            .findByIdAndRemove(productId)
            .exec();
    }

})();