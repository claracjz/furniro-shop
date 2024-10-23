import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
           <div className={styles.logo}>Furniro</div>
           <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
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
