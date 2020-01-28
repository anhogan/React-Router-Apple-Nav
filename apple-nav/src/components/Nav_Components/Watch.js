import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav_Components.css';
import watch from '../../apple_images/watch.svg';
import watchNike from '../../apple_images/watch_nike.svg';
import watchHermes from '../../apple_images/watch_hermes.svg';
import watchCompare from '../../apple_images/watch_compare.svg';
import bands from '../../apple_images/bands.svg';
import airpods from '../../apple_images/airpods.svg';
import watchAccessories from '../../apple_images/watch_accessories.svg';
import watchOS from '../../apple_images/watchOS.svg';

const Watch = () => {
  return (
    <div>
      <div className="component_links">
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={watch} alt="Apple Watch Series 5" />
            <span>Apple Watch Series 5</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={watchNike} alt="Apple Watch Nike" />
            <span>Apple Watch Nike</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={watchHermes} alt="Apple Watch Hermes" />
            <span>Apple Watch Hermes</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={watch} alt="Apple Watch Edition" />
            <span>Apple Watch Edition</span>
            <span className="newItem">New</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={watch} alt="Apple Watch Series 3" />
            <span>iApple Watch Series 3</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={watchCompare} alt="Compare" />
            <span>Compare</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={bands} alt="Bands" />
            <span>Bands</span>
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
            <img src={watchAccessories} alt="Accessories" />
            <span>Accessories</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="individual_link_container">
            <img src={watchOS} alt="Watch OS" />
            <span>watchOS</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default Watch;