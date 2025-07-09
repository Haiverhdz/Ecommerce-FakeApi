import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(GlobalContext);
  console.log("carrito: ", cart);
  

  return (
    <>
      <div  className="cart-widget">
        <span className="pill">{cart?.length}</span>
        <Icon className="cart-icon" icon="uil:cart" />"
      </div>
    </>
  );
};

export default CartWidget;
