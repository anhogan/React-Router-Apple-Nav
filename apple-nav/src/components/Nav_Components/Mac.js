import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';
import macbook from '../../apple_images/macbook.svg';

// Add in Image
// Add in New text
// Wrap each "item" in a div tag
// Add in animation

const Mac = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="MacBook Air" />
            <span>MacBook Air</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt='MacBook Pro 13"' />
            <span>MacBook Pro 13"</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt='MacBook Pro 16"' />
            <span>MacBook Pro 16"</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="iMac" />
            <span>iMac</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="iMac Pro" />
            <span>iMac Pro</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="Mac Pro" />
            <span>Mac Pro</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="Mac Mini" />
            <span>Mac mini</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="Compare" />
            <span>Compare</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="Pro Display XDR" />
            <span>Pro Display XDR</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="Accessories" />
            <span>Accessories</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macbook} alt="Catalina" />
            <span>Catalina</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default Mac;