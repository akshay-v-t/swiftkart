import React from 'react'
import ProductGrid from '../ProductGrid/ProductGrid'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Header from '../Header/Header'

const HomePage = () => {
  return (
    <div>
        <Header/>
   <Hero/>
   <div>
    <ProductGrid categoryName={'Electronics'}/>
   <ProductGrid categoryName={'Jewelery'}/>
   <ProductGrid categoryName={`Men's clothing`}/>
   <ProductGrid categoryName={`Women's clothing`}/>
   <Footer/>


   </div>

    </div>
  )
}

export default HomePage