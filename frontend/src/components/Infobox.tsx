import React from "react";
import styles from '../styles/Infobox.module.css';
import { HiOutlineTrophy } from "react-icons/hi2";
import { ImCheckboxChecked } from "react-icons/im";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";

const Infobox: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <div className={styles.item}>
        <i className={styles.icon}><HiOutlineTrophy /></i>
        <div className={styles['item-text']}>
        <h3>High Quality</h3>
        <p>crafted from top materials</p>
        </div>
      </div>
      <div className={styles.item}>
        <i className={styles.icon}><ImCheckboxChecked /></i>
        <div className={styles['item-text']}>
        <h3>Warranty Protection</h3>
        <p>Over 2 years</p>
        </div>
      </div>
      <div className={styles.item}>
        <i className={styles.icon}><LiaShippingFastSolid /></i>
        <div className={styles['item-text']}>
        <h3>Free Shipping</h3>
        <p>Order over 150 $</p>
        </div>
      </div>
      <div className={styles.item}>
        <i className={styles.icon}><MdSupportAgent /></i>
        <div className={styles['item-text']}>
        <h3>24/7 Support</h3>
        <p>Dedicated support</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Infobox;