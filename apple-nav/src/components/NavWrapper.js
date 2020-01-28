import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Mac, iPad, iPhone, Watch, TV, Music, Support, ShoppingBag, SearchBar } from './Nav_Components';
import apple_logo from '../apple_images/apple_logo.png';
import search from '../apple_images/search.png';
import './NavWrapper.css';

const NavWrapper = () => {

  const searchBar = () => {

  };

  return (
    <div>
      <div className="nav_wrapper">
        <div className="nav_links">
          <NavLink to="/"><img src={apple_logo} alt="Apple Logo" /></NavLink>
          <NavLink to="/mac">Mac</NavLink>
          <NavLink to="/ipad">iPad</NavLink>
          <NavLink to="/iphone">iPhone</NavLink>
          <NavLink to="/watch">Watch</NavLink>
          <NavLink to="/tv">TV</NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/support">Support</NavLink>
        </div>
        <img className="nav_image" src={search} alt="Search" />
        <ShoppingBag />
      </div>
      <div>
        <Route path="/mac" component={Mac} />
        <Route path="/ipad" component={iPad} />
        <Route path="/iphone" component={iPhone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={TV} />
        <Route path="/music" component={Music} />
        <Route path="/support" component={Support} />
      </div>
    </div>
  )
};

export default NavWrapper;