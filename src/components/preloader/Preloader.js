import React from "react";

import styles from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <div className={styles.coin}></div>
      </div>
    </div>
  );
};
