import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';

const Music = () => {
  return (
    <div>
      <div className="component_links_dark">
        <NavLink to="/">Apple Music</NavLink>
        <NavLink to="/">AirPods Pro</NavLink>
        <NavLink to="/">Airpods</NavLink>
        <NavLink to="/">HomePod</NavLink>
        <NavLink to="/">iPod Touch</NavLink>
        <NavLink to="/">Music Accessories</NavLink>
        <NavLink to="/">Gift Cards</NavLink>
      </div>
    </div>
  )
};

export default Music;