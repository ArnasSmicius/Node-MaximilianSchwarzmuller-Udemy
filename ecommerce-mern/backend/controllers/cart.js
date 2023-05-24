const Cart = require("../models/cart");
const Product = require("../models/product");

exports.addToCart = async (req, res, next) => {
  const productId = req.body.productId;
  const cart = await req.user.getCart();
  const cartProducts = await cart.getProducts({ where: { id: productId } });
  if (cartProducts.length > 0) {
    const oldQuantity = cartProducts[0].cartItem.quantity;
    await cart.addProduct(cartProducts[0], {
      through: { quantity: oldQuantity + 1 },
    });
  } else {
    const product = await Product.findByPk(productId);
    cart.addProduct(product, { through: { quantity: 1 } });
  }

  res.sendStatus(200);
};

exports.getCart = (req, res, next) => {
  // const cart = Cart.getCart();
  // const cartProducts = [];
  // cart.products.forEach((prod) => {
  //   const product = Product.findById(prod.id);
  //   cartProducts.push({ productData: product, qty: prod.qty });
  // });
  // const response = { products: cartProducts, totalPrice: cart.totalPrice };
  // res.send(response);

  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts()
        .then((products) => {
          res.send({ products: products });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.deleteCartProduct = async (req, res, next) => {
  const prodId = req.body.productId;
  const cart = await req.user.getCart();
  const products = await cart.getProducts({ where: { id: prodId } });
  const product = products[0];
  await product.cartItem.destroy();
  res.sendStatus(200);
};
