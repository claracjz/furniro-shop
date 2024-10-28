import React, { useState } from 'react';
import styles from '../styles/FilterBar.module.css';

interface FilterBarProps {
    onFilterChange: (showDiscountedOnly: boolean, sortOrder: 'price-low-high' | 'price-high-low' | 'Default') => void;
    onLimitChange: (limit: number) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({onFilterChange, onLimitChange}) => {

    const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
    const [sortOrder, setSortOrder] = useState<'price-low-high' | 'price-high-low' |'Default' > ('Default');
    const [limit, setLimit] = useState<number>(16);
 
    const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const isDiscounted = e.target.checked;
        setShowDiscountedOnly(isDiscounted);
        onFilterChange(isDiscounted, sortOrder);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        const newSortOrder = e.target.value as 'price-low-high' | 'price-high-low' | 'Default';
        setSortOrder(newSortOrder);
        onFilterChange(showDiscountedOnly, newSortOrder);
    };

    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        const newLimit = Number(e.target.value);
        setLimit(newLimit);
        onLimitChange(newLimit);
    };

    return (
      <div className={styles.filterbar}>
        <span className={styles.filtersTitle}>Filter</span>
        <div className={styles.divider}></div>
        <div className={styles.filters}>
          <label className={styles.filterItem}>
            <input
              type="checkbox"
              checked={showDiscountedOnly}
              onChange={handleDiscountChange}
            />
            Show Discounted Only
          </label>
          <div className={styles.divider}></div>
          <span className={styles.resultsInfo}>Showing 1–16 of 32 results</span>
          <div className={styles.divider}></div>
          <label className={styles.filterItem}>
            Show
            <select value={limit} onChange={handleLimitChange}>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </select>
          </label>
          <div className={styles.divider}></div>
          <label className={styles.filterItem}>
            Sort By
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="Default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>
    );
  }

  export default FilterBar;