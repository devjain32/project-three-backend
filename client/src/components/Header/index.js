import React from 'react';
import logo from './Plant Pal Logo.png'; 
import "./style.css";



function Header() {
  return <img src={logo} alt="Logo" className="logo"/>;
}

export default Header;