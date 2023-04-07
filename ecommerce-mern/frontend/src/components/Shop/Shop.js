import React, { useState } from "react";

import Product from "./Product";
import Grid from "../UI/Grid";

const Shop = () => {
  const [products, setProducts] = useState([
    { title: "First product" },
    { title: "Second product" },
  ]);

  const productList = (products) => {
    return (
      <Grid>
        {products.map((product) => (
          <Product product={product} />
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

export default Shop;
