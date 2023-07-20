import React from 'react';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center mt-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="container mx-auto w-full pb-10 mb-40">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded p-8 shadow-md mb-4">
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="mb-2">Price: ${item.price}</p>
              <p className="mb-2">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
