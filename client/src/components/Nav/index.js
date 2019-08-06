import React, { Component } from "react";
import logo from "./Copy of Plant Pal Logo.png"; 

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class Nav extends Component  {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
    collapsed: true,
    };
    }
    toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed,
    });
    }
  render(){
    const collapsed = this.state.collapsed;
 const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
 const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/"> 
      <img src={logo} alt=""></img>
      </a>
  <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarText"
    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className={`${classOne}`} id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
    <NavItem path="/" name="Home" />
    <NavItem path="/garden" name="My Garden" />
    <NavItem path="/logout" name="Logout" />
    </ul>
  </div>
        {/* <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
  </nav>


  );
}
}

export default Nav;
