import React from 'react';
import { NavLink } from 'react-router-dom';

const NavWrapper = () => {
  return (
    <NavLink to="/"><img src="" alt="Apple Logo" /></NavLink>
    <NavLink to="/mac/">Mac</NavLink>
    <NavLink to="/ipad/">iPad</NavLink>
    <NavLink to="/iphone/">iPhone</NavLink>
    <NavLink to="/watch/">Watch</NavLink>
    <NavLink to="/tv/">TV</NavLink>
    <NavLink to="/music/">Music</NavLink>
    <NavLink to="support.apple.com">Support</NavLink>
    <img src="" alt="Search" />
    <img src="" alt="Shopping Bag" />
  )
};

export default NavWrapper;