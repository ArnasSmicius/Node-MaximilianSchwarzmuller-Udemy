const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.send(product);
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.send(products);
};
