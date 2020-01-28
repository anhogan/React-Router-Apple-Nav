import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';

const iPad = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">iPad Pro</NavLink>
        <NavLink to="/">iPad Air</NavLink>
        <NavLink to="/">iPad</NavLink>
        <NavLink to="/">iPad Mini</NavLink>
        <NavLink to="/">Compare</NavLink>
        <NavLink to="/">Apple Pencil</NavLink>
        <NavLink to="/">Smart Keyboard</NavLink>
        <NavLink to="/">AirPods</NavLink>
        <NavLink to="/">Accessories</NavLink>
        <NavLink to="/">iPadOS</NavLink>
      </div>
    </div>
  )
};

export default iPad;