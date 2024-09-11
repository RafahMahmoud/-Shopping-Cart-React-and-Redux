import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice"; 

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity, 10) }));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x 
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;