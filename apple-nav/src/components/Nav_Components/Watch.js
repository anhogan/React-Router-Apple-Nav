import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';

const Watch = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">Apple Watch Series 5</NavLink>
        <NavLink to="/">Apple Watch Nike</NavLink>
        <NavLink to="/">Apple Watch Hermes</NavLink>
        <NavLink to="/">Apple Watch Edition</NavLink>
        <NavLink to="/">iApple Watch Series 3</NavLink>
        <NavLink to="/">Compare</NavLink>
        <NavLink to="/">Bands</NavLink>
        <NavLink to="/">AirPods</NavLink>
        <NavLink to="/">Accessories</NavLink>
        <NavLink to="/">watchOS</NavLink>
      </div>
    </div>
  )
};

export default Watch;