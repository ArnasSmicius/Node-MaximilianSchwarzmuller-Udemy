const express = require("express");

const productsController = require("../controllers/products");
const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/products", productsController.getProducts);

router.get("/products/:productId", productsController.getProduct);

router.post("/cart", cartController.addToCart);

router.get("/cart", cartController.getCart);

router.delete("/cart", cartController.deleteCartProduct);

module.exports = router;
