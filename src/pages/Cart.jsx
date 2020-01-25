import React, { useContext, useState } from 'react';
import { Context } from '../context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, removePhotoFromCartItems } = useContext(Context);
  const totalVal = cartItems.reduce((s,p) => s + p.price ,0);
  const total =totalVal.toLocaleString("ru-RU", {style: "currency", currency: "RUB"});
  const [totalPrice] = useState(total);
  const cartItemElements = cartItems.map(item => (
    <CartItem
      key={item.id}
      removeItem={removePhotoFromCartItems}
      item={item} />
  ));

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalPrice} </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
