import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]);
  

  const handleAddToCart = (product) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === product.id);

    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
    } else {
      return [...prevCart, product];
    }
  });
};

  
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))   
      .catch((error) => console.error("An error occurred:", error));
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ Products, setProducts, cart,setCart, handleAddToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
