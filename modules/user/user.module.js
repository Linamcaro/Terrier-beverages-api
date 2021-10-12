(function () {
    'use strict';

    module.exports = init;

    // Allow define the layers of the project
    function init() {
        return {
            UserController: require('./user.controller'),
            UserMiddleware: require('./user.middleware'),
            UserService: require('./user.service'),
            UserModel: require('./user.model')
        }
    }

})();