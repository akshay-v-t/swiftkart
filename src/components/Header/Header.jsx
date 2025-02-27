import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.siteLogo}>
            <h1>SwiftKart</h1>
        </div>
        <div className={styles.navMenu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
          </ul>

        </div>
        <div>
          cart
          
        </div>
    </div>
  )
}

export default Header