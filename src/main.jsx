import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import  { AppContextProvider } from './context/Context.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './components/Pages/CartPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <CartPage/>,

  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
    <RouterProvider router={router}/>
    </AppContextProvider>
  </StrictMode>,
)
