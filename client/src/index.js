import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import '../public/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import CreateProduct from './pages/CreateProduct.jsx';
import Products from './pages/Products.jsx';
import { ShoppingCartPage } from './pages/ShoppingCartPage.jsx';
import CheckOut from './pages/CheckoutPage.jsx';


export const ShoppingCartContext = React.createContext();


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className='homepage'>
          <h1 className='title'>Welcome : Buy & Sell </h1>
          <Link className='links' to="/shop">Shop</Link>
          <br></br>
          <Link className='links' to="/create-product">Create-product</Link>
          <br></br>
          <Link className='links' to="/cart">Cart</Link>
          
          <Link className='links' to="/checkout"></Link>

        </div>
      ),
    },
    {
      path: "create-product",
      element: <CreateProduct/>,
    },
    {
      path: "shop",
      element: <Products/>,
    },
    {
      path: "cart",
      element: <ShoppingCartPage/>,
    },
    {
      path: "checkout",
      element: <CheckOut/>,
    },
  ]);

  const cartState = useState([]);
  
  return (
    <div className='App'>
      <ShoppingCartContext.Provider value= {cartState}>
      <RouterProvider router = {router}/>
      </ShoppingCartContext.Provider>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);

