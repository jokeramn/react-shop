import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllGoods } from "../store/thunks.js";
import { GoodsList } from "./GoodsList.jsx";
import { Preloader } from "./Preloader.jsx";
import { Cart } from "./Cart.jsx";
import { CartList } from "./CartList.jsx";
import { Alert } from "./Alert.jsx";

export const Shop = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const order = useSelector((state) => state.order.order);
  const isCartVisible = useSelector((state) => state.loading.isCartVisible);
  const [alertName, setAlertName] = useState("");

  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList setAlertName={setAlertName} />}
      {isCartVisible && <CartList />}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};
