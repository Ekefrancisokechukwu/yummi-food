/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  OPEN_CART,
  CLOSE_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_AMOUNT,
  COUNT_CART_TOTALS,
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST_ITEM,
  COUNT_WISHLIST_TOTALS,
} from "../actions";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const getLocalStorageWishlist = () => {
  let cart = localStorage.getItem("wishlist");
  if (cart) {
    return JSON.parse(localStorage.getItem("wishlist"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  wishlist: getLocalStorageWishlist(),
  wishlist_amount: 0,
  inWishList:false,
  total_items: 0,
  total_amount: 0,
  isCartOpen: false,
  isCartItem: false,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    window.document.body.style.overflow = "hidden";
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  const setCartOpen = () => {
    window.document.body.style.overflow = "hidden";

    dispatch({ type: OPEN_CART });
  };
  const setCartClose = () => {
    window.document.body.style.overflow = "";

    dispatch({ type: CLOSE_CART });
  };
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_AMOUNT, payload: { id, value } });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  const addToWishList = (id,amount, product) => {
    dispatch({ type: ADD_TO_WISHLIST, payload: { id,amount, product } });
  };

  const removeWishListItem = (id) => {
    dispatch({ type: REMOVE_WISHLIST_ITEM, payload: id });
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    dispatch({ type: COUNT_WISHLIST_TOTALS });
  }, [state.wishlist]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        setCartOpen,
        setCartClose,
        removeCartItem,
        toggleAmount,
        addToWishList,
        removeWishListItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
