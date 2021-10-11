(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    // Define the middleware layer used by controller
    var OrderMiddleware = require('./order.module')().OrderMiddleware;

    // Method post (Add a order)
    router.post('/',
        OrderMiddleware.addOrder,
        function (req, res) {
            res.status(201).json(req.response);
        });

    // Method get (Get all orders)
    router.get('/',
        OrderMiddleware.getOrders,
        function (req, res) {
            res.status(200).json(req.response);
        });

    // Method get (Get a order by id)
    router.get('/:orderId',
        OrderMiddleware.getOrderById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    // Method put (Update a order by id)
    router.put('/:orderId',
        OrderMiddleware.modifyOrder,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    // Method delete (Delete a order by id)
    router.delete('/:orderId',
        OrderMiddleware.removeOrder,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();