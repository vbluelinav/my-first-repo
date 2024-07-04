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


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  // ]);
console.log('change')

reactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>

);
// console.log('root', root);
// {/* <React.StrictMode>
//     <RouterProvider router = {router} />

// </React.StrictMode> */}