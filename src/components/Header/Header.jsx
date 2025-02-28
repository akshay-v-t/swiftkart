import React, { useContext } from 'react'

import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import AppContext from '../../context/Context'

const Header = () => {
  
  const {cart} = useContext(AppContext);

  return(
    <div className={styles.container}>
    <div className={styles.header}>
        <div className={styles.siteLogo}>
           <Link to={'/'}> <h1>SwiftKart</h1></Link>
        </div>
        <div className={styles.navMenu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
          </ul>

        </div>
        <div>
         <Link to="/cart"> <button className={styles.cartBtn}>Cart<button>{cart.length}</button></button> </Link>
          
        </div>
    </div>
    </div>
  )
}



export default Header