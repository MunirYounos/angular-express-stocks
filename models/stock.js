var mongoose        = require('mongoose');
const config        =require('../config/database');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.stockSchema = new Schema({
    username:{
        type: String,
        required: true
    }, 
    stockName:{
        type: String, 
        required: true
    }, 
    body: {
        type: String,
        required: true
    }, 
    profit: {
        type: String,
        required: true

    },
    price: {
        type: String,
        required: true

    },
    date: { 
        type: Date, 
        required: true,
        default: Date.now
    }

});
exports.Stock = mongoose.model('Stock',exports.stockSchema);
