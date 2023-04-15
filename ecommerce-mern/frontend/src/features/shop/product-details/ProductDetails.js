import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../services/product";
import NoPage from "../../no-page/NoPage";

const ProductDetails = (props) => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [pageNotFound, setPageNotFound] = useState(false);

  useEffect(() => {
    getProduct(params.productId)
      .then((response) => setProduct(response))
      .catch((error) => setPageNotFound(true));
  }, []);

  return (
    <div>
      {pageNotFound && <NoPage />}
      {pageNotFound === false && product === undefined && <h1>Loading...</h1>}
      <div>{JSON.stringify(product)}</div>
    </div>
  );
};

export default ProductDetails;
