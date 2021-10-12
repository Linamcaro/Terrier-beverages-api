(function () {
    //Variables used by mongoose
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        user: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('users', UserSchema);
})();