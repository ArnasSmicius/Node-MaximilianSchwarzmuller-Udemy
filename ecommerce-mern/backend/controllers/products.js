const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const requestBody = req.body;
  const title = requestBody.title;
  const imageUrl = requestBody.imageUrl;
  const price = requestBody.price;
  const description = requestBody.description;
  req.user
    .createProduct({
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

exports.editProduct = async (req, res, next) => {
  const product = await Product.findByPk(req.body.id);

  product.title = req.body.title;
  product.price = req.body.price;
  product.imageUrl = req.body.imageUrl;
  product.description = req.body.description;

  const updatedProduct = await product.save();

  res.send(updatedProduct);
};

exports.deleteProduct = async (req, res, next) => {
  const productId = req.body.id;
  const product = await Product.findByPk(productId);
  await product.destroy();
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
