import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]); 

  
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
    <AppContext.Provider value={{ Products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
