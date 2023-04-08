import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "../features/shop/product-list/ProductList";
import AddProduct from "../features/admin/add-product/AddProduct";
import NoPage from "../features/no-page/NoPage";
import Navigation from "../features/navigation/Navigation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
