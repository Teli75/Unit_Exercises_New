import React from 'react';
//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      {/** The to attribute is similar to href, it points the link component to a route by changing the path in the url  */}
      <li><NavLink to="/" end style={({isActive}) => isActive ? {background: 'tomato'} : undefined}>Home</NavLink></li>
      {/** Add custom className. React router will provide this function with a param */}
      <li><NavLink to="about" className={({isActive}) => isActive ? "custom-class-name" : undefined }>About</NavLink></li>
      <li><NavLink to="teachers">Teachers</NavLink></li>
      <li><NavLink to="courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;  