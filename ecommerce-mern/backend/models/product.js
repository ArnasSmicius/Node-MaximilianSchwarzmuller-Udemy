const Cart = require("./cart");

let products = [];

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.floor(Math.random() * 9999);
    products.push(this);
  }

  update() {
    const productIndex = products.findIndex((prod) => prod.id == this.id);
    if (~productIndex) {
      products[productIndex] = this;
    }
  }

  static fetchAll() {
    return products;
  }

  static findById(id) {
    return products.find((product) => product.id == id);
  }

  static deleteById(id) {
    const product = products.find((prod) => prod.id == id);
    Cart.deleteProduct(id, product.price);
    products = products.filter((product) => product.id != id);
  }
};
