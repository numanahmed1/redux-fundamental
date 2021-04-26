import { createStore } from "redux";
import cartReducer from "../reducer/cartReducer";

export const store = createStore(cartReducer);
