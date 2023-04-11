import React from "react";

import styles from "./Product.module.css";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";

const Product = (props) => {
  const sellerActions = <Button>Add to Cart</Button>;

  const adminActions = [
    <Button onClick={props.onClickEdit}>Edit</Button>,
    <Button>Delete</Button>,
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
