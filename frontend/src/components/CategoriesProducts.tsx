import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';

interface Product {
    id: number;
    name: string;
    price: number;
    imageLink: string;
    discountPrice: number | null;
    isNew: boolean;
}

const CategoriesProducts: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [products, setProduct] = useState<Product[]>([]);;

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            const response = await fetch(`http://localhost:3000/product?categoryId=${id}&limit=16`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProductsByCategory();
    }, [id]);

    return (
        <div>
            <h2>Products</h2>
            <Products products={products} limit={16} showTitle={false} fetchOnMount={false} />
            </div>
    );   
};

export default CategoriesProducts;