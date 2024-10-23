import React from "react";
import styles from '../styles/Banner.module.css';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1>Shop</h1>
        <p>Home &gt; Shop</p>
      </div>
    </div>
  );
};

export default Banner;