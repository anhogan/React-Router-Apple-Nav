import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';

const Mac = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">MacBook Air</NavLink>
        <NavLink to="/">MacBook Pro 13"</NavLink>
        <NavLink to="/">MacBook Pro 16"</NavLink>
        <NavLink to="/">iMac</NavLink>
        <NavLink to="/">iMac Pro</NavLink>
        <NavLink to="/">Mac Pro</NavLink>
        <NavLink to="/">Mac mini</NavLink>
        <NavLink to="/">Compare</NavLink>
        <NavLink to="/">Pro Display XDR</NavLink>
        <NavLink to="/">Accessories</NavLink>
        <NavLink to="/">Catalina</NavLink>
      </div>
    </div>
  )
};

export default Mac;