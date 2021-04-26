import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
  cart: [],
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.id],
      };
    case REMOVE_FROM_CART:
      const id = action.id;
      const newCart = state.cart.filter((item) => item !== id);
      return { cart: newCart };
    default:
      return state;
  }
};

export default cartReducer;
