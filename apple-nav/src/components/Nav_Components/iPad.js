import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';
import ipad from '../../apple_images/ipad.svg';
import ipadPro from '../../apple_images/ipadPro.svg';
import ipadCompare from '../../apple_images/ipad_compare.svg';
import apple_pencil from '../../apple_images/apple_pencil.svg';
import smart_keyboard from '../../apple_images/smart_keyboard.svg';
import airpods from '../../apple_images/airpods.svg';
import ipad_accessories from '../../apple_images/ipad_accessories.svg';
import ipadOS from '../../apple_images/ipadOS.svg';

const iPad = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={ipadPro} alt="iPad Pro" />
            <span>iPad Pro</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={ipad} alt="iPad Air" />
            <span>iPad Air</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={ipad} alt="iPad" />
            <span>iPad</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={ipad} alt="iPad Mini" />
            <span>iPad Mini</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={ipadCompare} alt="Compare" />
            <span>Compare</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={apple_pencil} alt="Apple Pencil" />
            <span>Apple Pencil</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={smart_keyboard} alt="Smart Keyboard" />
            <span>Smart Keyboard</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={airpods} alt="AirPods" />
            <span>AirPods</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={ipad_accessories} alt="Accessories" />
            <span>Accessories</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={ipadOS} alt="iPad OS" />
            <span>iPadOS</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default iPad;