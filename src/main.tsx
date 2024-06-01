import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import './index.css';
import { router } from './router/router';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      <RouterProvider router={ router } />
    </AnimatePresence>
  </React.StrictMode>,
);
