(function () {
    'use strict';

    // Define services of the API    
    module.exports = {
        createOrder: createOrder,
        fetchOrders: fetchOrders,
        fetchOrderById: fetchOrderById,
        updateOrder: updateOrder,
        deleteOrder: deleteOrder
    };

    // Define the Model for the Oirder
    var OrderModel = require('./order.module')().OrderModel;

    // Method Add a Order
    function createOrder(order) {
        return OrderModel.create(order);
    }

    // Method Get all orders
    function fetchOrders() {
        return OrderModel.find({})
            .exec();
    }

    // Method Get a order by id
    function fetchOrderById(orderId) {
        return OrderModel.findById(orderId)
            .exec();
    }

    // Method Update a order by id
    function updateOrder(orderId, order) {
        return OrderModel
            .findByIdAndUpdate(orderId, order, {new: true})
            .exec();
    }

    // Method Delete a order by id
    function deleteOrder(orderId) {
        return OrderModel
            .findByIdAndRemove(orderId)
            .exec();
    }

})();