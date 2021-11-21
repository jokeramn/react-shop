import { GET_GOODS } from "../constants/constants";

export const getGoodsAction = (payload) => ({
  type: GET_GOODS,
  payload
})