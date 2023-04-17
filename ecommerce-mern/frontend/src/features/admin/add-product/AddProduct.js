import React from "react";
import { useNavigate } from "react-router-dom";

import { addProduct } from "../../../services/product";
import ProductForm from "../ProductForm";

const AddProduct = () => {
  const navigate = useNavigate();

  const submitHandler = (product) => {
    addProduct(
      product.title,
      product.imageUrl,
      product.description,
      product.price
    )
      .then(() => {
        console.log("Navigate is called");
        navigate("/products");
      })
      .catch((error) => console.error(error));
  };

  return <ProductForm onSubmit={submitHandler} />;
};

export default AddProduct;
