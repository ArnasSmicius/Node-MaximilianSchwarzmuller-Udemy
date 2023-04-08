import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AddProduct.module.css";

import { addProduct } from "../../../services/product";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addProduct(title)
      .then(() => {
        console.log("Navigate is called");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <form className={styles["product-form"]} onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <button className={styles.btn} type="submit">
          Add Product
        </button>
      </form>
    </main>
  );
};

export default AddProduct;
