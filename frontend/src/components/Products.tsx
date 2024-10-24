import React, { useEffect, useState } from "react";


interface Product {
    id: number;
    name: string;
    imageLink: string;
    description: string;
    price: number;
    discountPrice: number | null;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/product?limit=8&offset=0');
            const data = await response.json();
            setProducts(data);
    };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Our Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.imageLink} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        {product.discountPrice ? (
                            <>
                            <p>
                                <strong>${product.discountPrice.toFixed(2)}</strong>
                            </p>
                            <p>
                                <strong><del>${product.price.toFixed(2)}</del></strong>
                            </p>
                            </>
                        ) : (
                            <p><strong>${product.price.toFixed(2)}</strong></p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;



