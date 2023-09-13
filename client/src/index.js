import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import CreateProduct from './pages/CreateProduct.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="/home">Home</Link>
          <br></br>
          <Link to="/create-product">Create-product</Link>
          <br></br>
          <Link to="/shop">Shop</Link>
          <br></br>
          <Link to="/cart">Cart</Link>
        </div>
      ),
    },
    {
      path: "create-product",
      element: <CreateProduct/>,
    },
    {
      path: "home",
      element: <div>Home</div>,
    },
    {
      path: "shop",
      element: <div>Shop</div>,
    },
    {
      path: "cart",
      element: <div>Cart</div>,
    },
  ]);
  
  return (
    <div className='App'>
      <RouterProvider router = {router}/>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);

