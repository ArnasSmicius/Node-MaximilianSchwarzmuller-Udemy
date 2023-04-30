import React, { useEffect, useState } from "react";
import { getCart } from "../../../services/cart";

const Cart = () => {
  const [cart, setCart] = useState({ products: [] });

  useEffect(() => {
    getCart()
      .then((response) => setCart(response))
      .catch((error) => console.error(error));
  }, []);

  const products = () => {
    return cart.products.map((prod) => {
      return (
        <li key={prod.productData.key}>
          {prod.productData.title} ({prod.qty})
        </li>
      );
    });
  };

  return (
    <main>
      {cart.products.length == 0 && <h1>No Products in Cart!</h1>}
      {cart.products.length > 0 && <ul>{products()}</ul>}
    </main>
  );
};

export default Cart;
