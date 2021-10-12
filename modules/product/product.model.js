(function () {
    //Variables used by mongoose
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var ProductSchema = new Schema({
        code: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        unitValue: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('products', ProductSchema);
})();