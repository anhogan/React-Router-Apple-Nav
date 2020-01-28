import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';
import appleMusic from '../../apple_images/apple_music.svg';
import airpodsPro from '../../apple_images/airpods_pro.svg';
import airpods from '../../apple_images/airpods_white.svg';
import homePod from '../../apple_images/homepod.svg';
import iPodTouch from '../../apple_images/ipod_touch.svg';
import accessories from '../../apple_images/headphones_white.svg';
import giftCards from '../../apple_images/gift_cards.svg';

const Music = () => {
  return (
    <div>
      <div className="component_links_dark">
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={appleMusic} alt="Apple Music" />
            <span>Apple Music</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={airpodsPro} alt="AirPods Pro" />
            <span>AirPods Pro</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={airpods} alt="AirPods" />
            <span>AirPods</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={homePod} alt="HomePod" />
            <span>HomePod</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={iPodTouch} alt="iPod Touch" />
            <span>iPod Touch</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={accessories} alt="Music Accessories" />
            <span>Music Accessories</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={giftCards} alt="Gift Cards" />
            <span>Gift Cards</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default Music;