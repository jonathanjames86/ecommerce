var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  mongoose.Schema ({
  products: [{
    item: {type: String, required:true, ref: "Product"},//ref will return an _id
    quantity: {type: Number, min:1}
  }]
});

module.exports = cartSchema;
