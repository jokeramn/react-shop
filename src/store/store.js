import { combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { goodsReducer } from "./reducers/goodsReducer";
import { loadingReducer } from "./reducers/loadingReducer";
import { orderReducer } from "./reducers/orderReducer";

export const store = createStore(combineReducers({
  goods: goodsReducer,
  loading: loadingReducer,
  order: orderReducer
}), compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))