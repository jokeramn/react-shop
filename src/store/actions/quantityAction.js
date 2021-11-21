import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "../constants/constants";

export const increaseQuantityAction = (id) => ({ type: INCREASE_QUANTITY, id })
export const decreaseQuantityAction = (id) => ({ type: DECREASE_QUANTITY, id })