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

exports.deleteProduct = (req, res, next) => {
  const productId = req.body.id;
  Product.deleteById([productId]);
  res.sendStatus(200);
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.send(rows);
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const product = Product.findById(req.params.productId);
  if (product === undefined) {
    res.sendStatus(404);
  } else {
    res.send(product);
  }
};
