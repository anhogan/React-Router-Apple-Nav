import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';

const Support = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">Apple Support Page</NavLink>
      </div>
    </div>
  )
};

export default Support;