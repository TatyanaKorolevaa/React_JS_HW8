import { combineReducers } from "redux";
import shopReducer from "./slice";

const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;