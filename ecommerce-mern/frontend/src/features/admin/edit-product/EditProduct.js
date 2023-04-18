import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../ProductForm";
import { getProduct } from "../../../services/product";

const EditProduct = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(params.productId)
      .then((response) => {
        setProduct(response);
        document.title = response.title;
      })
      .catch((error) => navigate("/404"));
  }, []);

  return <ProductForm product={product} editMode={true} />;
};

export default EditProduct;
