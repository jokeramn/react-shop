import { useSelector } from "react-redux";
import { GoodsItem } from "./GoodsItem";

export const GoodsList = ({ setAlertName }) => {
  const goods = useSelector((state) => state.goods.goods);

  return !goods.length ? (
    <h3>Nothing here</h3>
  ) : (
    <div className="goods">
      {goods.map((item) => {
        return (
          <GoodsItem key={item.id} {...item} setAlertName={setAlertName} />
        );
      })}
    </div>
  );
};
