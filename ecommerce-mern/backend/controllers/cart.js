const Cart = require("../models/cart");
const Product = require("../models/product");

exports.addToCart = (req, res, next) => {
  const productId = req.body.productId;
  const product = Product.findById(productId);
  Cart.addProduct(productId, product.price);
  res.sendStatus(200);
};

exports.getCart = (req, res, next) => {
  const cart = Cart.getCart();
  const cartProducts = [];
  cart.products.forEach((prod) => {
    const product = Product.findById(prod.id);
    cartProducts.push({ productData: product, qty: prod.qty });
  });
  const response = { products: cartProducts, totalPrice: cart.totalPrice };
  res.send(response);
};
