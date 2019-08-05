import React from "react";
import logo from "./Copy of Plant Pal Logo.png"; 

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/"> 
      <img src={logo} alt=""></img>
      </a>
        {/* <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
    </nav>


  );
}

export default Nav;
