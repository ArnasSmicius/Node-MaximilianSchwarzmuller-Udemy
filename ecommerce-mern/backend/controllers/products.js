const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const requestBody = req.body;
  const product = new Product(
    null,
    requestBody.title,
    requestBody.imageUrl,
    requestBody.description,
    requestBody.price
  );
  product.save();
  res.send(product);
};

exports.editProduct = (req, res, next) => {
  const requestBody = req.body;
  const product = new Product(
    requestBody.id,
    requestBody.title,
    requestBody.imageUrl,
    requestBody.description,
    requestBody.price
  );
  product.update();
  res.send(product);
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.send(products);
};

exports.getProduct = (req, res, next) => {
  const product = Product.findById(req.params.productId);
  if (product === undefined) {
    res.sendStatus(404);
  } else {
    res.send(product);
  }
};
