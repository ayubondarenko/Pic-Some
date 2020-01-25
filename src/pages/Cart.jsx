import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, removePhotoFromCartItems } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(()=> {
    const totalVal = cartItems.reduce((s,p) => s + p.price ,0);
    const total =totalVal.toLocaleString("ru-RU", {style: "currency", currency: "RUB"});
    setTotalPrice(total);
  }, [cartItems])
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
