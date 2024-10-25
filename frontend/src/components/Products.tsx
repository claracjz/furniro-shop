import React, { useEffect, useState } from "react";
import styles from "../styles/Products.module.css";


interface Product {
    id: number;
    name: string;
    imageLink: string;
    description?: string;
    price: number;
    discountPrice: number | null;
    isNew: boolean;
}

interface ProductsProps {
    products?: Product[];
    limit: number;
    showTitle?: boolean;
    showMore?: boolean;
    fetchOnMount?: boolean;
}

const Products: React.FC<ProductsProps> = ({ 
    products: initialProducts = [], 
    limit, 
    showTitle = true,
    showMore = true,
    fetchOnMount = true,
 }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    useEffect(() => {
        if (fetchOnMount && initialProducts.length === 0) {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ limit, offset: 0 }),
            });
            const data: Product[] = await response.json();
            const formattedProducts: Product[] = data.map((product) => ({
                ...product,
                price: Number(product.price),
                discountPrice: 
                product.discountPrice !== null ? Number(product.discountPrice) : null,
            }));
    
        setProducts(formattedProducts);
    };

    fetchProducts();
}
}, [fetchOnMount, initialProducts, limit]);



    return (
        <div>
             {showTitle && <h2>Our Products</h2>}
            <div className={styles.container}>

                {products.slice(0, limit).map((product) => (
                    <div key={product.id} className={styles.card}>
                        <img src={product.imageLink} alt={product.name} className={styles.image} />
                        <div className={styles.info}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        {product.discountPrice !== null ? (
                            <p className={styles.price}>
                                <span className={styles.discount}>${product.discountPrice.toFixed(2)}</span>
                                <span className={styles.orgprice}>${product.price.toFixed(2)}</span>
                            </p>
                             ) : (
                            <p className={styles.price}>${product.price.toFixed(2)}</p>
                             )}
                             {product.isNew && <span className={styles.newBadge}>New</span>}
                        </div>
                    </div>
                ))}
        </div>
        {showMore && <button className={styles.button}>Show More</button>}
        </div>
    );
};
export default Products;



