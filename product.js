var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//BluePrint for your model
var productSchema = new Schema({
  title: {
    type: String,
    required: true,
    Unique: true,
    Index: true
  },
  Description: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Product', productSchema);
