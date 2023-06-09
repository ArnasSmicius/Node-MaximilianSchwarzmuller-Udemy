import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllProducts } from "../../../services/product";
import Product from "./Product";
import Grid from "../../../components/Grid/Grid";
import { addToCart } from "../../../services/cart";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  const detailsClickHandler = (id) => {
    navigate(`/products/${id}`);
  };

  const addToCartClickHandler = (productId) => {
    addToCart(productId).then(() => {
      navigate("/cart");
    });
  };

  const productList = (products) => {
    return (
      <Grid>
        {products.map((product) => (
          <Product
            key={product.title}
            product={product}
            onClickDetails={detailsClickHandler}
            onClickAddToCard={addToCartClickHandler}
          />
        ))}
      </Grid>
    );
  };

  const noProducts = <h1>No Products Found!</h1>;

  return (
    <main>
      {products.length > 0 && productList(products)}
      {products.length === 0 && noProducts}
    </main>
  );
};

export default ProductList;
