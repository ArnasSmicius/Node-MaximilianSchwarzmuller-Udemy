import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../services/product";
import styles from "./ProductDetails.module.css";
import NoPage from "../../no-page/NoPage";
import Button from "../../../components/Button/Button";

const ProductDetails = (props) => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [pageNotFound, setPageNotFound] = useState(false);

  useEffect(() => {
    getProduct(params.productId)
      .then((response) => {
        setProduct(response);
        document.title = response.title;
      })
      .catch((error) => setPageNotFound(true));
  }, []);

  const content = () => {
    return (
      <main className={styles.centered}>
        <h1>{product.title}</h1>
        <hr />
        <div>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <Button>Add to Cart</Button>
      </main>
    );
  };

  return (
    <div>
      {pageNotFound && <NoPage />}
      {pageNotFound === false && product === undefined && <h1>Loading...</h1>}
      {pageNotFound === false && product != undefined && content()}
    </div>
  );
};

export default ProductDetails;
