import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllProducts } from "../../../services/product";
import Grid from "../../../components/Grid/Grid";
import Product from "../../shop/product-list/Product";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  });

  const editHandler = () => {
    navigate("/admin/edit-product");
  };

  const productList = (products) => {
    return (
      <Grid>
        {products.map((product) => (
          <Product
            key={product.title}
            product={product}
            adminActions={true}
            onClickEdit={editHandler}
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

export default Products;
