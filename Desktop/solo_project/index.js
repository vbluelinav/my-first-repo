import React from "react";
import {createRoot} from 'react-dom/client'
import reactDom from "react-dom";
import App from './client/components/App.js';
import './styles/style.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import {BrowserRouter} from 'react-router-dom'

console.log('change')

reactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>
);
