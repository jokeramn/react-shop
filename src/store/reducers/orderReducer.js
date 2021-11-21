import { ADD_ORDER, CHANGE_ORDER, DELETE_ORDER, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../constants/constants";

const initialState = {
  order: []
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:

      return {
        ...state,
        order: [...state.order, action.payload]
      }
    case CHANGE_ORDER:
      const itemIndex = state.order.findIndex((el) => el.id === action.id);
      return {
        ...state,
        order: [...state.order].map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1
            }
          } else {
            return orderItem
          }
        })
      }
    case DELETE_ORDER:
      return {
        ...state,
        order: [...state.order].filter(item => item.id !== action.id)
      }
    case INCREASE_QUANTITY: {
      return {
        ...state,
        order: [...state.order].map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
        })
      }
    }
    case DECREASE_QUANTITY: {
      return {
        ...state,
        order: [...state.order].map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          } else {
            return item
          }
        })
      }
    }
    default:
      return state;
  }

}