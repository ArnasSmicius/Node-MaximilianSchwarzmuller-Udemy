import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../ProductForm";
import { getProduct, editProduct } from "../../../services/product";

const EditProduct = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState();

  const submitHandler = (product) => {
    editProduct(
      params.productId,
      product.title,
      product.imageUrl,
      product.description,
      product.price
    )
      .then(() => {
        navigate("/admin/products");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProduct(params.productId)
      .then((response) => {
        setProduct(response);
        document.title = response.title;
      })
      .catch((error) => navigate("/404"));
  }, []);

  return (
    <ProductForm product={product} editMode={true} onSubmit={submitHandler} />
  );
};

export default EditProduct;
