import { useState, useContext } from "react";
import Button from "../Button";
import "./index.css";
import { GlobalContext } from "../../../context/GlobalContext";
import Cart from "../../pages/Cart";

const Counter = ({ title, price, id, category, img }) => {
  const [counter, setCounter] = useState(0);
  const { setCart, cart } = useContext(GlobalContext);
  const handleIncrease = () => setCounter((prevCounter) => prevCounter + 1);

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const addItemToCart = () => {
    const itemsToAdd = [];
    for (let i = 0; i < counter; i++) {
      itemsToAdd.push({ id, title, price, category, img });
    }
    if (itemsToAdd.length > 0) {
      setCart((prevCart) => [...prevCart, ...itemsToAdd]);
    }
  };


  return (
    <>
      <div className="counter-styles">
        <Button
          className="button-counter"
          action={handleDecrease}
          text="-"
          disabled={counter <= 0}
        />
        <p className="style-p">
          <span>{counter}</span>
        </p>
        <Button
          className="button-counter"
          action={handleIncrease}
          text="+"
        />
      </div>
      <div>
        <button onClick={addItemToCart} className="button-add">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Counter;