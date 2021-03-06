var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, required: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  orders: [{type: monsgoose.Schema.Types.ObjectID, ref: 'Order'}]
});

module.exports = mongoose.model('User', userSchema);
