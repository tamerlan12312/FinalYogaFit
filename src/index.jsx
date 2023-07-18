import React from 'react';
import ReactDOM from 'react-dom/client';
import "./sass/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import AppRouter from './router/AppRouter';
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist';
import { ProfilProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
 <>
 <ProfilProvider>
 <WishlistProvider> 
<CartProvider>
<AppRouter/>
</CartProvider>
 </WishlistProvider>
 </ProfilProvider>
 </>
  </React.StrictMode>

);


