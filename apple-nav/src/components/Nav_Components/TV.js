import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';

const TV = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">Apple TV+</NavLink>
        <NavLink to="/">Apple TV App</NavLink>
        <NavLink to="/">Apple TV 4K</NavLink>
        <NavLink to="/">Apple TV HD</NavLink>
        <NavLink to="/">AirPlay</NavLink>
        <NavLink to="/">Accessories</NavLink>
      </div>
    </div>
  )
};

export default TV;