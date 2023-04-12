import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "../features/shop/product-list/ProductList";
import AddProduct from "../features/admin/add-product/AddProduct";
import NoPage from "../features/no-page/NoPage";
import Navigation from "../features/navigation/Navigation";
import Shop from "../features/shop/shop/Shop";
import Cart from "../features/shop/cart/Cart";
import Checkout from "../features/shop/checkout/Checkout";
import Products from "../features/admin/products/Products";
import Orders from "../features/shop/orders/Orders";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
