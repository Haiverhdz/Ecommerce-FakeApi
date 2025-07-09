import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Cart = () => {
  const { cart, setCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  const getProductQuantity = (id) =>
    cart.filter((item) => item.id === id).length;

  const increaseQuantity = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const decreaseQuantity = (id) => {
    const indexToRemove = cart.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      const newCart = [...cart];
      newCart.splice(indexToRemove, 1);
      setCart(newCart);
    }
  };

  const total = parseFloat(
    cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)
  );

  const uniqueProducts = [...new Set(cart.map((item) => item.id))];

  const pay = () => {
    navigate("/pay");
  };

  return (
    <div className="container-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="ul-style">
            {uniqueProducts.map((productId) => {
              const product = cart.find((item) => item.id === productId);
              const quantity = getProductQuantity(productId);
              return (
                <li className="li-style" key={productId}>
                  <img src={product.img} alt="" />
                  <div>{product.title}</div>
                  <div>Price: ${product.price}</div>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(productId)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQuantity(product)}>+</button>
                  </div>
                  <div>
                    Subtotal: ${(product.price * quantity).toFixed(2)}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-total">
            <h3>Total: ${total}</h3>
          </div>
          <div className="container">
            <button onClick={pay} className="pay-button">Pay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
