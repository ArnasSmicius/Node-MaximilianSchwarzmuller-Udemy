import React, { useState, useEffect } from "react";

import { getAllProducts } from "../../../services/product";
import Product from "./Product";
import Grid from "../../../components/Grid/Grid";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  });

  const productList = (products) => {
    return (
      <Grid>
        {products.map((product) => (
          <Product key={product.title} product={product} />
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
