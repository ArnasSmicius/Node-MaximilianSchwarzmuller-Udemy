import React from "react";

import styles from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <main>
      <form
        className={styles["product-form"]}
        action="/admin/add-product"
        method="POST"
      >
        <div className={styles["form-control"]}>
          <label for="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <button className={styles.btn} type="submit">
          Add Product
        </button>
      </form>
    </main>
  );
};

export default AddProduct;
