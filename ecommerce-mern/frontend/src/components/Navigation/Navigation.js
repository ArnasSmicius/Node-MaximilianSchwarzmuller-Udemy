import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const path = useLocation().pathname;

  return (
    <div className={styles["main-header"]}>
      <nav className={styles["main-header__nav"]}>
        <ul className={styles["main-header__item-list"]}>
          <li className={styles["main-header__item"]}>
            <Link
              className={path === "/" ? styles["active"] : undefined}
              to="/"
            >
              Shop
            </Link>
          </li>
          <li className={styles["main-header__item"]}>
            <Link
              className={
                path === "/admin/add-product" ? styles["active"] : undefined
              }
              to="/admin/add-product"
            >
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
