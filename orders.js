var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./carts');

var orderSchema = new Schema({
  user: {type: String, required: true, ref: 'User'},
  products: [cartSchema]
});
module.exports = mongoose.model('Order', orderSchema);
