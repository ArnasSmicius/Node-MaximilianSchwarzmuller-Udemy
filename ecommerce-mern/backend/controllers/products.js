const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const requestBody = req.body;
  const title = requestBody.title;
  const imageUrl = requestBody.imageUrl;
  const price = requestBody.price;
  const description = requestBody.description;

  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
  })
    .then((prod) => {
      res.send(prod);
    })
    .catch((err) => {
      console.log(err);
    });
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
  Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  Product.findByPk(req.params.productId)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => res.sendStatus(404));
};
