import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  Products from './Products';
import styles from '../styles/SingleProduct.module.css'

interface Product {
    id: number;
    name: string;
    sku: string;
    category: { id: number, name: string };
    description?: string;
    largeDescription: string;
    price: number;
    discountPrice: number | null;
    isNew: boolean;
    imageLink: string;
    otherImagesLink: string[];
}

interface RelatedProduct {
    id: number;
    name: string;
    imageLink: string;
    price: number;
    discountPrice: number | null;
    isNew: boolean;
}

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);

useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:3000/product/${id}`);
            const data = await response.json();

            if(!data || !data.category) {
                return;
            }

            console.log(data);
            setProduct(data);

        const relatedResponse = await fetch(
            `http://localhost:3000/product/related?categoryId=${data.category.id}&excludeId=${data.id}`
        );
        const relatedData = await relatedResponse.json();
        setRelatedProducts(relatedData);
        };

        fetchProduct();
    }, [id]);

    if (!product || !product.otherImagesLink) {
        return <p>Loading...</p>;
    }

  return (
    <div className={styles.container}>
        <div className={styles.breadcrumb}>
        <p>Home &gt; Shop &gt; {product.name}</p>
        </div>
      <div className={styles.productInfo}>
        <div className={styles.productImages}>
        <div className={styles.smallImages}>
        {product.otherImagesLink && product.otherImagesLink.map((image, index) => (
                    <img key={index} src={image} alt={`${product.name} ${index + 1}`} />
        ))}
       </div>
       <img src={product.imageLink} alt={product.name} className={styles.mainImage}/>
        </div>
        </div>
        <div className={styles.productDetailsContainer}>
       <h1>{product.name}</h1>
       <p>Rs. {product.discountPrice ?? product.price}</p>
       <p>{product.largeDescription}</p>
       
       <div className={styles.sizeOptions}>
       <p>Size</p>
       <div className={styles.sizeButtons}>
       <button value="L">L</button>
       <button value="XL">XL</button>
       <button value="XS">XS</button>
     </div>
    </div>
    <div className={styles.colorOptions}>
        <p>Color</p>
        <div className={styles.colorCircles}>
            <div className={`${styles.colorCircle} ${styles.purple}`}></div>
            <div className={`${styles.colorCircle} ${styles.black}`}></div>
            <div className={`${styles.colorCircle} ${styles.gold}`}></div>
        </div>
    </div>
   
       <div className={styles.productCartButtons}>
       <div className={styles.quantityOptions}>
       <div className={styles.quantityButton}>
        <span className={styles.minus}>-</span>
        <span className={styles.quantity}>1</span>
        <span className={styles.plus}>+</span>
        </div>
    </div>
       <button>Add to Cart</button>
       <button>Compare</button>
       </div>
       <div className={styles.productDetails}>
        <p>SKU: {product.sku}</p>
        <p>Category: {product.category.name}</p>
       </div>
       </div>
       <div className={styles.productDescription}>
        <div className={styles.descriptionHeader}>
        <h2>Description</h2>
        <h2>Additional Information</h2>
        </div>
        <p>{product.largeDescription}</p>
       </div>
      <div className={styles.relatedProducts}>
        <h2>Related Products</h2>
        <Products products={relatedProducts} limit={4} showTitle={false} />
            </div>
            </div>
  );
};

export default SingleProduct;