import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
       <div className={styles.info}>
        <h3>Furniro</h3>
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
       </div>
       <div className={styles.links}>
        <div>
            <h4>Links</h4>
            <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>
        <div>
            <h4>Help</h4>
            <ul>
          <li><a href="#">Payment Options</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Privacy Policies</a></li>
        </ul>
        </div>
        <div>
            <h4>Newsletter</h4>
            <input type="email" placeholder='Enter your email address' />
            <button>SUBSCRIBE</button>
        </div>
       </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2024 furniro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;