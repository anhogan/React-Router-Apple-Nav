import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonToolbar, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import shopping_bag from '../../apple_images/shopping_bag.png';

const ShoppingBag = () => {
  return (
    <div className="shopping_bag_container">
      <ButtonToolbar>
        <OverlayTrigger trigger="click" key="bottom" placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Title as="h3">Your bag is empty.</Popover.Title>
              <Popover.Content>
              <ul>
                <li><NavLink to="/"><i class="fas fa-shopping-bag"></i>Bag</NavLink></li>
                <hr />
                <li><NavLink to="/"><i class="far fa-heart"></i>Favorites</NavLink></li>
                <hr />
                <li><NavLink to="/"><i class="fas fa-box-open"></i>Orders</NavLink></li>
                <hr />
                <li><NavLink to="/"><i class="fas fa-cog"></i>Account</NavLink></li>
                <hr />
                <li><NavLink to="/"><i class="fas fa-user-circle"></i>Sign In</NavLink></li>
              </ul>
              </Popover.Content>
            </Popover>
          }>
          <Button variant="secondary"><img className="nav_image" src={shopping_bag} alt="Shopping Bag" /></Button>
        </OverlayTrigger>
      </ButtonToolbar>
    </div>
  )
};

export default ShoppingBag;