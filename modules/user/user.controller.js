(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    // Define the middleware layer used by controller
    var UserMiddleware = require('./user.module')().UserMiddleware;

    // Method post (Add a user)
    router.post('/',
        UserMiddleware.addUser,
        function (req, res) {
            res.status(201).json(req.response);
        });

    // Method get (Get all users)
    router.get('/',
        UserMiddleware.getUsers,
        function (req, res) {
            res.status(200).json(req.response);
        });

    // Method get (Get a user by id)
    router.get('/:userId',
        UserMiddleware.getUserById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    // Method put (Update a user by id)
    router.put('/:userId',
        UserMiddleware.modifyUser,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    // Method delete (Delete a user by id)
    router.delete('/:userId',
        UserMiddleware.removeUser,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();