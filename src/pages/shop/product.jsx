import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, description, category } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const [cartItemCount, setCartItemCount] = useState(cartItems[id] || 0); 

  const handleAddToCart = () => {
    addToCart(id);
    setCartItemCount((prevCount) => prevCount + 1); 
  };

  const alt = `Product: ${productImage}, ${description}`;

  return (
    <div className="product">
      <img src={productImage} alt={alt} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <h3>{description}</h3>
      </div>
      <button className="addToCartBttn mt-4" onClick={handleAddToCart}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
