import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';
import iPhone11 from '../../apple_images/iphone11.svg';
import iPhone11Pro from '../../apple_images/iphone11_pro.svg';
import iPhone8 from '../../apple_images/iphone8.svg';
import iPhone_compare from '../../apple_images/iphone_compare.svg';
import apple_card from '../../apple_images/apple_card.svg';
import airpods from '../../apple_images/airpods_white.svg';
import iPhone_accessories from '../../apple_images/iphone_accessories.svg';
import iOS from '../../apple_images/ios.svg';

const iPhone = () => {
  return (
    <div>
      <div className="component_links_dark">
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iPhone11Pro} alt="iPhone 11 Pro" />
            <span>iPhone 11 Pro</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iPhone11} alt="iPhone 11" />
            <span>iPhone 11</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iPhone11} alt="iPhone XR" />
            <span>iPhone XR</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iPhone8} alt="iPhone 8" />
            <span>iPhone 8</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iPhone_compare} alt="Compare" />
            <span>Compare</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={apple_card} alt="Apple Card" />
            <span>Apple Card</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={airpods} alt="Airpods" />
            <span>AirPods</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iPhone_accessories} alt="Accessories" />
            <span>Accessories</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iOS} alt="iOS 13" />
            <span>iOS 13</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default iPhone;