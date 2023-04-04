import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../components/Index/Index";
import AddProduct from "../components/AddProduct/AddProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
