import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const params = useParams();

  return <div>Product Details: {params.productId}</div>;
};

export default ProductDetails;
