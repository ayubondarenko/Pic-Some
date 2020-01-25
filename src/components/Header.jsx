import React, { useContext } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';

function Header() {
  const { cartItems } = useContext(Context);
  const cartIconClass = `ri-shopping-cart-${
    cartItems.length ? 'fill' : 'line'
  } ri-fw ri-2x`;

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <i className={cartIconClass} />
      </Link>
    </header>
  );
}

export default Header;
