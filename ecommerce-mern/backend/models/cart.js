const cart = [];

module.exports = class Cart {
  constructor(productId) {
    this.productId = productId;
  }

  save() {
    cart.push(this);
  }
};
