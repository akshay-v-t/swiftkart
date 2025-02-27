import React from 'react'
import styles from './ProductCard.module.scss'

const ProductCard = ({ title, img, price }) => {
  return (
    <div className={styles.productCard}>
      <img src={img} alt={name} />
      <h3 className={`${styles.productTitle} ${styles.truncate}`}> {title}</h3>
      <h4 className={styles.productPrice}> ${price}</h4>
      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
