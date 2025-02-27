
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import ProductGrid from './components/ProductGrid/ProductGrid'


const App = () => {
  return (

    
    <div>
    
   <Header/>
   <Hero/>
   <div>
   <ProductGrid categoryName={'electronics'}/>
   <ProductGrid categoryName={'jewelery'}/>
   <ProductGrid categoryName={`men's clothing`}/>
   <ProductGrid categoryName={`women's clothing`}/>
   <Footer/>


   </div>

   
    </div>
  
  )
}

export default App