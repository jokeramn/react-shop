import { CHANGE_ORDER } from "../constants/constants";

export const changeOrderToCartACtion = (id) => ({
  type: CHANGE_ORDER,
  id
})