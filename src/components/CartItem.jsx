import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item__image" />
      <div className="cart-item__details">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__price">${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
