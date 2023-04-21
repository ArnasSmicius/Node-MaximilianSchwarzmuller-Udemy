import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllProducts, deleteProduct } from "../../../services/product";
import Grid from "../../../components/Grid/Grid";
import Product from "../../shop/product-list/Product";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const refreshProducts = () => {
    getAllProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  const editHandler = (productId) => {
    navigate(`/admin/edit-product/${productId}`);
  };

  const deleteHandler = (productId) => {
    deleteProduct(productId).then(refreshProducts);
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
            onClickDelete={deleteHandler}
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
