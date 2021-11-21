import { DELETE_ORDER } from "../constants/constants";

export const deleteOrderFromCartAction = (id) => ({
  type: DELETE_ORDER,
  id
})