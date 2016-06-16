var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var controller = require('./controller.js');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/ecommerce', function(err) {
    if (err) console.log(err);
});

app.post('/api/products', controller.create);
app.get('/api/products', controller.index);
app.get('/api/products/:id', controller.show);
app.put('/api/products:id', controller.update);
app.delete('/api/products/:id', controller.destroy);
app.post('/api/order/:id', controller.createOrder);




app.listen(port, function() {
  console.log("Started server on port", port);
});
