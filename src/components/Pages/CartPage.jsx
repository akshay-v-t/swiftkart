import React, { useContext } from 'react'
import Header from '../Header/Header'
import AppContext from '../../context/Context'
import styles from './CartPage.module.scss'

const CartPage = () => {

    const { cart} = useContext(AppContext)

  return (
    <div>
        <Header/>

        <div className={styles.container}> 
           <h1 className={styles.title}>Shopping Cart</h1>

          
          

               

            


            <table border={1}>
                   <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                   </thead>

                   <tbody>

                   {cart.map((product, index)=>(





                    <tr key={index}>
                        <td> 
                            
                            <h3 className={`${styles.productTitle} ${styles.truncate}`}> {product.title}</h3>
                            
                            
                            </td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                    
                ))}
                   </tbody>

                </table>
           


        </div>
    </div>
  )
}

export default CartPage