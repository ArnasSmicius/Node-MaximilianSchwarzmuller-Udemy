const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const requestBody = req.body;
  const product = new Product(
    requestBody.title,
    requestBody.imageUrl,
    requestBody.description,
    requestBody.price
  );
  product.save();
  res.send(product);
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.send(products);
};
