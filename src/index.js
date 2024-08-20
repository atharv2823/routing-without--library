import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"


const root = ReactDOM.createRoot(document.getElementById('root'));

const currentpath = window.location.pathname

if (currentpath=="/"){
  root.render(<Home/>)
}
else if (currentpath == "/about"){
  root.render(<About/>)
}
else if (currentpath == "/contact"){
  root.render(<Contact/>)
  }
  else{
    root.render(<h1>404 Error</h1>)
    }