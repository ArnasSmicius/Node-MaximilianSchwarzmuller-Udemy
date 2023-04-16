const Cart = require("../models/cart");

exports.addToCart = (req, res, next) => {
  new Cart(req.body.productId).save();
  res.sendStatus(200);
};
