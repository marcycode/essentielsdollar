import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="mb-20">
      <div className="cart mb-20">
        <div>
          <h1 className="text-3xl font-bold mt-5">Cart</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p className="text-2xl font-bold mb-5"> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/products")} className="">
              Continue Shopping
            </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1 className="font-bold mt-2 text-2xl"> Your Shopping Cart is Empty</h1>
        )}
      </div>

      {/* Add margin-bottom here */}
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
