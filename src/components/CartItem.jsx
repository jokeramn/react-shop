import { useDispatch } from "react-redux";
import { deleteOrderFromCartAction } from "../store/actions/deleteOrderFromCartAction";
import {
  decreaseQuantityAction,
  increaseQuantityAction,
} from "../store/actions/quantityAction";

export const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();
  const deleteOrderFromBasket = () => {
    dispatch(deleteOrderFromCartAction(id));
  };
  const increaseQuantity = () => dispatch(increaseQuantityAction(id));
  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    dispatch(decreaseQuantityAction(id));
  };
  return (
    <li className="collection-item">
      <div style={{ display: "flex", alignItems: "center" }}>
        {name}{" "}
        <i
          className="material-icons"
          style={{
            cursor: "pointer",
            paddingRight: "0.5rem",
            paddingLeft: "0.5rem",
            color: "#26a69a",
          }}
          onClick={increaseQuantity}
        >
          add
        </i>
        {quantity}
        <i
          className="material-icons"
          style={{ cursor: "pointer", paddingLeft: "0.5rem", color: "#26a69a" }}
          onClick={decreaseQuantity}
        >
          remove
        </i>
        = {price * quantity} руб.
      </div>

      <span className="secondary-content" onClick={deleteOrderFromBasket}>
        <i className="material-icons" style={{ cursor: "pointer" }}>
          clear
        </i>
      </span>
    </li>
  );
};
