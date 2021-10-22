(function () {
    //Variables used by mongoose
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var OrderSchema = new Schema({
        code: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        registerdate: {
            type: String,
            required: true
        },
        identification: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        salesman: {
            type: String,
            required: true
        },
        products: {
            type: Array
        }
    });

    module.exports = mongoose.model('orders', OrderSchema);
})();