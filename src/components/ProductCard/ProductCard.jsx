import React, { useContext, useState } from 'react'
import styles from './ProductCard.module.scss'
import AppContext from '../../context/Context'

const ProductCard = ({ product }) => {

  const {cart, setCart, handleAddToCart} = useContext(AppContext)

  const [count, setCount] = useState(1)


  return (
    <div className={styles.productCard}>
     <img src={product.image} alt={name} />
      <h3 className={`${styles.productTitle} ${styles.truncate}`}> {product.title}</h3>
      <h4 className={styles.productPrice}> ${product.price}</h4>
      
     

      
      <div className={styles.valueItems}>  
      <button className={styles.valueBtn} onClick={()=> setCount(prevCount=>prevCount-1)}>- </button>
      <input className={styles.valueInput} type="text" value={count} readOnly/>
      <button className={styles.valueBtn}  onClick={()=> setCount(prevCount=>prevCount+1)}>+</button> 

      </div>   
      <button className={styles.addToCart} onClick={()=> handleAddToCart({...product, quantity: count})}>Add to Cart</button> 
     
    </div>
  )
}

export default ProductCard
