import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../components/Shop/Shop";
import AddProduct from "../components/AddProduct/AddProduct";
import NoPage from "../components/NoPage/NoPage";
import Navigation from "../components/Navigation/Navigation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
