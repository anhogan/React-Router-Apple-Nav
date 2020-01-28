import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';
import appleTV from '../../apple_images/apple_tv.svg';
import TVApp from '../../apple_images/tv_app.svg';
import appleTVBox from '../../apple_images/apple_tv_box.svg';
import airplay from '../../apple_images/airplay.svg';
import accessories from '../../apple_images/tv_accessories.svg';

const TV = () => {
  return (
    <div>
      <div className="component_links_dark">
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={appleTV} alt="Apple TV+" />
            <span>Apple TV+</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={TVApp} alt="Apple TV App" />
            <span>Apple TV App</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={appleTVBox} alt="Apple TV 4K" />
            <span>Apple TV 4K</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={appleTVBox} alt="Apple TV HD" />
            <span>Apple TV HD</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={airplay} alt="AirPlay" />
            <span>AirPlay</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={accessories} alt="Accessories" />
            <span>Accessories</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default TV;