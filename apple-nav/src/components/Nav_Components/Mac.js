import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';
import macbook from '../../apple_images/macbook.svg';
import imac from '../../apple_images/imac.svg';
import mac_pro from '../../apple_images/mac_pro.svg';
import macmini from '../../apple_images/macmini.svg';
import compare from '../../apple_images/mac_compare.svg';
import proDisplay from '../../apple_images/pro_display.svg';
import accessories from '../../apple_images/headphones.svg';
import macOS from '../../apple_images/macOS.svg';

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
            <img src={imac} alt="iMac" />
            <span>iMac</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={imac} alt="iMac Pro" />
            <span>iMac Pro</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={mac_pro} alt="Mac Pro" />
            <span>Mac Pro</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macmini} alt="Mac Mini" />
            <span>Mac mini</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={compare} alt="Compare" />
            <span>Compare</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={proDisplay} alt="Pro Display XDR" />
            <span>Pro Display XDR</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={accessories} alt="Accessories" />
            <span>Accessories</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={macOS} alt="Catalina" />
            <span>Catalina</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default Mac;