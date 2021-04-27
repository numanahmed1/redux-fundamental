import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: "Lenovo laptop",
    },
    {
      id: 2,
      name: "Asus laptop",
    },
    {
      id: 3,
      name: "HP laptop",
    },
    {
      id: 4,
      name: "Apple laptop",
    },
    {
      id: 5,
      name: "Dell laptop",
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_FROM_CART:
      const cartId = action.cartId;
      const remainingCart = state.cart.filter((item) => item.cartId !== cartId);
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};

export default cartReducer;
