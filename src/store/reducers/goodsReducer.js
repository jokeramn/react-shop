import { GET_GOODS } from "../constants/constants";

const initialState = {
  goods: []
}

export const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      return {
        ...state,
        goods: [...state.goods, ...action.payload]
      }

    default:
      return state
  }
}