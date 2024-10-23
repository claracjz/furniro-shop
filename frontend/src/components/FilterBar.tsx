import React from 'react';
import styles from '../styles/FilterBar.module.css';

const FilterBar: React.FC = () => {
    return (
        <div className={styles.filterbar}>
            <div className={styles.section}>
            <button>Filter</button>
            </div>
            <div className={styles.results}>
                <p>Showing 1-16 of 32 results</p>
            </div>
            <div className={styles.options}>
                <label>
                    Show
                    <select>
                        <option value="16">16</option>
                        <option value="32">32</option>
                    </select>
                </label>
                <label>
                    Sort By
                    <select>
                        <option value="Default">Default</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                    </select>
                </label>
            </div>
        </div>

    );
};

export default FilterBar;