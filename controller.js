var mongoose = require('mongoose');
var Product = require('./product.js');

module.exports = {
        index: function(req, res, next) {
            Product.find({}, function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else res.status(200).json(response);
            });
        },
        show: function(req, res, next) {
            Product.findById(req.params.id, function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else res.status(200).json(response);
            });
        },
        create: function(req, res, next) {
            var products = new Product(req.body);
            products.create(function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(response);
                }
            });
        },
        update: function(req, res, next) {
            if (req.params.id) {
                return res.status(400).json('Need a search');
            } //OPTIONS
            Product.update({
                _id: req.params.id
            }, req.body, {
                new: true,
                upsert: true
            }, function(err, response) {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    res.status(200).json(response);
                }
            });
        },
        destroy: function(req, res) {

            if (!req.params.id) {
                return res.status(400).send('id query needed');
            }
            Product.remove(req.params.id, function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(response);
                }
            });
        },
        createOrder: function(res, req, next) {
            if (!req.params.id) {
                var order = new Order(req.body);
                req.params.id = order._id;
            }
            Order.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                upsert: true
            }, function(err, order) {
                User.findById(order.user, function(e, user) {
                    if (e) console.log(e);
                    user.orders.push(order._id);
                    user.save(function(e, r) {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.status(200).send(order);
                        }
                    });
                });
            });
  }
};
        //   showOrder: function(res, req, next){
        //     Order.findById(req.params.id, function(e,r){
        //       if (err){
        //         res.status(500).send(err);
        //         else res.status(200).send(r)
        //       }
        //     })
        //   }
