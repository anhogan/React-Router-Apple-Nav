import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';

const iPhone = () => {
  return (
    <div>
      <div className="component_links_dark">
        <NavLink to="/">iPhone 11 Pro</NavLink>
        <NavLink to="/">iPhone 11</NavLink>
        <NavLink to="/">iPhone XR</NavLink>
        <NavLink to="/">iPhone 8</NavLink>
        <NavLink to="/">Compare</NavLink>
        <NavLink to="/">Apple Card</NavLink>
        <NavLink to="/">AirPods</NavLink>
        <NavLink to="/">Accessories</NavLink>
        <NavLink to="/">iOS 13</NavLink>
      </div>
    </div>
  )
};

export default iPhone;