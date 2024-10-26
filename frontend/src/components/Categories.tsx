import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Categories.module.css'

interface Category {
    id: number;
    name: string;
    imageLink: string;
}

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('http://localhost:3000/category');
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId: number) => {
        navigate(`/shop/category/${categoryId}`);
    };

    return (
        <div className={styles.categories}>
            <h2>Browse The Range</h2>
            <div className={styles.grid}>
                {categories.map(category => (
                   <div key={category.id} className={styles.card}
                   onClick={() => handleCategoryClick(category.id)}
                   >
                    <img src={category.imageLink} alt={category.name} />
                    <p>{category.name}</p>
                   </div> 
                ))}
            </div>
        </div>
    );
    };

    export default Categories;
