let cart = { products: [], totalPrice: 0 };

module.exports = class Cart {
  static addProduct(id, productPrice) {
    const existingProductIndex = cart.products.findIndex(
      (prod) => prod.id === id
    );
    const existingProduct = cart.products[existingProductIndex];
    let updatedProduct;
    if (existingProduct) {
      updatedProduct = { ...existingProduct };
      updatedProduct.qty = updatedProduct.qty + 1;
      cart.products[existingProductIndex] = updatedProduct;
    } else {
      updatedProduct = { id: id, qty: 1 };
      cart.products = [...cart.products, updatedProduct];
    }
    cart.totalPrice = cart.totalPrice + +productPrice;
  }

  static deleteProduct(id, productPrice) {
    const product = cart.products.find((prod) => prod.id == id);
    if (!product) {
      return;
    }
    const productQty = product.qty;
    cart.products = cart.products.filter((prod) => prod.id != id);
    cart.totalPrice -= productPrice * productQty;
  }

  static getCart() {
    return cart;
  }
};
