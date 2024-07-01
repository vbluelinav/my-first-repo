import React from "react";
import {createRoot} from 'react-dom/client'
import reactDom from "react-dom";

import App from './client/components/App.jsx';
import './styles/style.css';

console.log('change')

const root = createRoot(document.getElementById('root'));
// console.log('root', root);
root.render(
<App/>
)