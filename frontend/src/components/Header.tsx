import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
           <div className={styles.logo}>Furniro</div>
           <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
           </nav>
           <div className={styles.icons}>
            <FaSearch className={styles.icon} title="Search"/>
            <FaUser className={styles.icon} title="Login"/>
            <FaHeart className={styles.icon} title="Heart"/>
            <FaShoppingCart className={styles.icon} title="Cart"/>
           </div>
        </header>
    );
};

export default Header;
