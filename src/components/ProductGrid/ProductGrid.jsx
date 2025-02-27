import React, { useContext, useEffect, useState } from 'react';
import styles from './ProductGrid.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import AppContext from '../../context/Context';

const ProductGrid = ({ categoryName }) => {
  const { Products } = useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

 
  useEffect(() => {
    if (categoryName) {
      const filtered = Products.filter((product) =>
        product.category.toLowerCase() === categoryName.toLowerCase()
      ).slice(0,5);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(Products); 
    }
  }, [categoryName, Products]); 

  return (
    <div className={styles.products}>
      <h2>Best of {categoryName}</h2>

      <div className={styles.productsGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              img={product.image}
              price={product.price}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
