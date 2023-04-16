const Cart = require("../models/cart");
const Product = require("../models/product");

exports.addToCart = (req, res, next) => {
  const productId = req.body.productId;
  const product = Product.findById(productId);
  Cart.addProduct(productId, product.price);
  res.sendStatus(200);
};
