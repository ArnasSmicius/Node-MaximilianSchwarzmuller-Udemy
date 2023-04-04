import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import AddProductPage from "../pages/AddProductPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/admin/add-product" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
