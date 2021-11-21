import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import { changeVisibleCartAction } from "../store/actions/changeVisibleCartAction";

export const CartList = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const handleCartVisible = () => {
    dispatch(changeVisibleCartAction());
  };
  const totalPrice = order.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  return (
    <ul className="collection cart-list">
      <li className="collection-item active">
        Корзина
        <i className="material-icons cart-close" onClick={handleCartVisible}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
    </ul>
  );
};
