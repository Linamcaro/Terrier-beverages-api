(function () {
    'use strict';

    // Define endpoints of the API
    module.exports = {
        addUser: addUser,
        getUsers: getUsers,
        getUserById: getUserById,
        modifyUser: modifyUser,
        removeUser: removeUser
    };

    // Define the service layer used by middleware
    var UserService = require('./user.module')().UserService;
    const { BadRequest } = require('../util/errors');

    // Method Add a User
    function addUser(req, res, next) {
        // Get user Values of the request body
        const { user, email, password, rol, state } = req.body;
        try{
            // Validate required fields
            if (!user) {
                throw new BadRequest('Missing required fields: User Name');
            }
            else if(!email) {
                throw new BadRequest('Missing required fields: Email');    
            }
            else if(!password) {
                throw new BadRequest('Missing required fields: Password');    
            }
            else if(!rol) {
                throw new BadRequest('Missing required fields: Rol');    
            }
            else if(!state) {
                throw new BadRequest('Missing required fields: State');    
            }

            // Call service (Add a User)
            UserService.createUser(req.body)
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

    // Method Get all users
    function getUsers(req, res, next) {

        // Call service (Get all users)
        UserService.fetchUsers()
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

    // Method Get a user by id
    function getUserById(req, res, next) {

        // Call service (Get a product by id)
        UserService.fetchUserById(req.params.userId)
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

    // Method Update a user by id
    function modifyUser(req, res, next) {
        // Get user Values of the request body
        const { user, email, password, rol, state } = req.body;
        try{
            // Validate required fields
            if (!user) {
                throw new BadRequest('Missing required fields: User Name');
            }
            else if(!email) {
                throw new BadRequest('Missing required fields: Email');    
            }
            else if(!password) {
                throw new BadRequest('Missing required fields: Password');    
            }
            else if(!rol) {
                throw new BadRequest('Missing required fields: Rol');    
            }
            else if(!state) {
                throw new BadRequest('Missing required fields: State');    
            }
            
            // Call service (Update a user by id)
            UserService.updateUser(req.params.userId, req.body)
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

    // Method Delete a user by id
    function removeUser(req, res, next) {

        // Call service (Delete a user by id)
        UserService.deleteUser(req.params.userId)
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
