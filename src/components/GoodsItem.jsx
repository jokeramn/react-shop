import { useDispatch, useSelector } from "react-redux";
import { addOrderToCartAction } from "../store/actions/addOrderToCartAction";
import { changeOrderToCartACtion } from "../store/actions/changeOrderToCartAction";
export const GoodsItem = ({
  id,
  full_background,
  name,
  price,
  description,
  setAlertName,
}) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const itemIndex = order.findIndex((el) => el.id === id);

  const addGoodToCart = () => {
    const item = {
      id,
      name,
      price,
      quantity: 1,
    };

    if (itemIndex < 0) {
      dispatch(addOrderToCartAction(item));
    } else {
      dispatch(changeOrderToCartACtion(id));
    }
    setAlertName(name);
  };

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={addGoodToCart}>
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.4rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
};
