(function () {
    'use strict';

    // Define services of the API    
    module.exports = {
        createUser: createUser,
        fetchUsers: fetchUsers,
        fetchUserById: fetchUserById,
        updateUser: updateUser,
        deleteUser: deleteUser
    };

    // Define the Model for the User
    var UserModel = require('./user.module')().UserModel;

    // Method Add a User
    function createUser(user) {
        return UserModel.create(user);
    }

    // Method Get all users
    function fetchUsers() {
        return UserModel.find({})
            .exec();
    }

    // Method Get a user by id
    function fetchUserById(userId) {
        return UserModel.findById(userId)
            .exec();
    }

    // Method Update a user by id
    function updateUser(userId, user) {
        return UserModel
            .findByIdAndUpdate(userId, user, {new: true})
            .exec();
    }

    // Method Delete a user by id
    function deleteUser(userId) {
        return UserModel
            .findByIdAndRemove(userId)
            .exec();
    }

})();