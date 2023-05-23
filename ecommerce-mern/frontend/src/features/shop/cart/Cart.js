import React, { useEffect, useState } from "react";
import { getCart, deleteCartProduct } from "../../../services/cart";
import Button from "../../../components/Button/Button";

const Cart = () => {
  const [cart, setCart] = useState({ products: [] });

  useEffect(() => {
    refreshCart();
  }, []);

  const refreshCart = () => {
    getCart()
      .then((response) => setCart(response))
      .catch((error) => console.error(error));
  };

  const onDeleteHandler = (prodId) => {
    deleteCartProduct(prodId)
      .then(() => refreshCart())
      .catch((error) => console.error(error));
  };

  const products = () => {
    console.log(cart);
    return cart.products.map((prod) => {
      return (
        <li key={prod.id}>
          <p>
            {prod.title} ({prod.cartItem.quantity})
          </p>
          <Button
            onClick={() => {
              onDeleteHandler(prod.id);
            }}
          >
            Delete
          </Button>
        </li>
      );
    });
  };

  return (
    <main>
      {cart.products.length === 0 && <h1>No Products in Cart!</h1>}
      {cart.products.length > 0 && <ul>{products()}</ul>}
    </main>
  );
};

export default Cart;
