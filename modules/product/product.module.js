(function () {
    'use strict';

    module.exports = init;

    // Allow define the layers of the project
    function init() {
        return {
            ProductController: require('./product.controller'),
            ProductMiddleware: require('./product.middleware'),
            ProductService: require('./product.service'),
            ProductModel: require('./product.model')
        }
    }

})();