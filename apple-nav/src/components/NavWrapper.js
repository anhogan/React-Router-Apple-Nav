import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Mac, iPad, iPhone, Watch, TV, Music, Support } from './Nav_Components';
import apple_logo from '../apple_logo.png';
import search from '../search.png';
import shopping_bag from '../shopping_bag.png';

const NavWrapper = () => {
  return (
    <div>
      <NavLink to="/"><img src={apple_logo} alt="Apple Logo" /></NavLink>
      <NavLink to="/mac">Mac</NavLink>
      <NavLink to="/ipad">iPad</NavLink>
      <NavLink to="/iphone">iPhone</NavLink>
      <NavLink to="/watch">Watch</NavLink>
      <NavLink to="/tv">TV</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/support">Support</NavLink>
      <img src={search} alt="Search" />
      <img src={shopping_bag} alt="Shopping Bag" />

      <Route path="/mac" component={Mac} />
      <Route path="/ipad" component={iPad} />
      <Route path="/iphone" component={iPhone} />
      <Route path="/watch" component={Watch} />
      <Route path="/tv" component={TV} />
      <Route path="/music" component={Music} />
      <Route path="/support" component={Support} />
    </div>
  )
};

export default NavWrapper;