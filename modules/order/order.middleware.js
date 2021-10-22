(function () {
    'use strict';

    // Define endpoints of the API
    module.exports = {
        addOrder: addOrder,
        getOrders: getOrders,
        getOrderById: getOrderById,
        modifyOrder: modifyOrder,
        removeOrder: removeOrder
    };

    // Define the service layer used by middleware
    var OrderService = require('./order.module')().OrderService;
    const { BadRequest } = require('../util/errors');

    // Method Add a Order
    function addOrder(req, res, next) {
        // Get order Values of the request body
        const { code, total, registerdate, identification, name, salesman } = req.body;
        try{
            // Validate required fields
            if (!code) {
                throw new BadRequest('Missing required fields: Code');
            }
            else if(!total) {
                throw new BadRequest('Missing required fields: Total');    
            }
            else if(!registerdate) {
                throw new BadRequest('Missing required fields: Register Date');    
            }
            else if(!identification) {
                throw new BadRequest('Missing required fields: Customer Identification');    
            }
            else if(!name) {
                throw new BadRequest('Missing required fields: Customer Name');    
            }
            else if(!salesman) {
                throw new BadRequest('Missing required fields: Salesman');    
            }

            // Call service (Add a Order)
            OrderService.createOrder(req.body)
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

    // Method Get all orders
    function getOrders(req, res, next) {

        // Call service (Get all orders)
        OrderService.fetchOrders()
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

    // Method Get a order by id
    function getOrderById(req, res, next) {

        // Call service (Get a order by id)
        OrderService.fetchOrderById(req.params.orderId)
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

    // Method Update a order by id
    function modifyOrder(req, res, next) {
        // Get order Values of the request body
        const { code, total, registerdate, identification, name, salesman } = req.body;
        try{
            // Validate required fields
            if (!code) {
                throw new BadRequest('Missing required fields: Code');
            }
            else if(!total) {
                throw new BadRequest('Missing required fields: Total');    
            }
            else if(!registerdate) {
                throw new BadRequest('Missing required fields: Register Date');    
            }
            else if(!identification) {
                throw new BadRequest('Missing required fields: Customer Identification');    
            }
            else if(!name) {
                throw new BadRequest('Missing required fields: Customer Name');    
            }
            else if(!salesman) {
                throw new BadRequest('Missing required fields: Salesman');    
            }
            
            // Call service (Update a order by id)
            OrderService.updateOrder(req.params.orderId, req.body)
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

    // Method Delete a order by id
    function removeOrder(req, res, next) {

        // Call service (Delete a order by id)
        OrderService.deleteOrder(req.params.orderId)
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
