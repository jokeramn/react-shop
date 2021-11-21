import { API_KEY, API_URL } from "../config";
import { getGoodsAction } from "./actions/getGoodsAction";
import { getLoadingFalseAction } from "./actions/getLoadingFalse";

export const getAllGoods = () => async (dispatch) => {
  await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getGoodsAction(data.featured));
      dispatch(getLoadingFalseAction())
    })
    .catch(err => alert(err))
};
