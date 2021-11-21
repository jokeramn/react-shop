import { GET_LOADING_FALSE, VISIBLE_CART } from "../constants/constants"

const initialState = {
  loading: true,
  isCartVisible: false
}

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOADING_FALSE:
      return {
        ...state,
        loading: false
      }
    case VISIBLE_CART: {
      return {
        ...state,
        isCartVisible: !state.isCartVisible
      }
    }

    default:
      return state
  }
}