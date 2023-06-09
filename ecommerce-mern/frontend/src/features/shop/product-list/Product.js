import React from "react";

import styles from "./Product.module.css";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";

const Product = (props) => {
  const detailsClickHandler = (event) => {
    props.onClickDetails(props.product.id);
  };

  const addToCartClickHandler = (event) => {
    props.onClickAddToCard(props.product.id);
  };

  const editHandler = (event) => {
    props.onClickEdit(props.product.id);
  };

  const deleteHandler = (event) => {
    props.onClickDelete(props.product.id);
  };

  const sellerActions = [
    <Button onClick={detailsClickHandler}>Details</Button>,
    <Button onClick={addToCartClickHandler}>Add to Cart</Button>,
  ];

  const adminActions = [
    <Button onClick={editHandler}>Edit</Button>,
    <Button onClick={deleteHandler}>Delete</Button>,
  ];

  return (
    <Card className={styles["product-item"]}>
      <header className={styles["card__header"]}>
        <h1 className={styles["product__title"]}>{props.product.title}</h1>
      </header>
      <div className={styles["card__image"]}>
        <img src={props.product.imageUrl} alt="A Book" />
      </div>
      <div className={styles["card__content"]}>
        <h2 className={styles["product__price"]}>${props.product.price}</h2>
        <p className={styles["product__description"]}>
          {props.product.description}
        </p>
      </div>
      <div className={styles["card__actions"]}>
        {props.adminActions ? adminActions : sellerActions}
      </div>
    </Card>
  );
};

export default Product;
