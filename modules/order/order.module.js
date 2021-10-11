(function () {
    'use strict';

    module.exports = init;

    // Allow define the layers of the project
    function init() {
        return {
            OrderController: require('./order.controller'),
            OrderMiddleware: require('./order.middleware'),
            OrderService: require('./order.service'),
            OrderModel: require('./order.model')
        }
    }

})();