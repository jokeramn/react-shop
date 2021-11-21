import { useDispatch } from "react-redux";
import { changeVisibleCartAction } from "../store/actions/changeVisibleCartAction";

export const Cart = ({ quantity = 0 }) => {
  const dispatch = useDispatch();
  const handleCartVisible = () => {
    dispatch(changeVisibleCartAction());
  };

  return (
    <div className="cart blue darken-4 white-text" onClick={handleCartVisible}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity && <span className="cart-quantity">{quantity}</span>}
    </div>
  );
};
