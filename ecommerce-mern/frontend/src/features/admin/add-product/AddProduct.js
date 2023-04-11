import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AddProduct.module.css";

import { addProduct } from "../../../services/product";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const imageUrlChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addProduct(title, imageUrl, description, price)
      .then(() => {
        console.log("Navigate is called");
        navigate("/products");
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
        <div className={styles["form-control"]}>
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={imageUrl}
            onChange={imageUrlChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
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
