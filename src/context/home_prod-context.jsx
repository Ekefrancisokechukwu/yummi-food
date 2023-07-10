/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import reducer from "../reducers/home_prod-reducer";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  GET_HOME_PRODUCTS,
  FILTER_FEATURED_PRODUCTS,
  QUICKBUY_OPEN,
  QUICKBUY_CLOSE,
  FILTER_HOME_PROD,
} from "../actions";

import { HomefoodData } from "../products/data";

const HomeContext = createContext();
const allFilter = [...new Set(HomefoodData.map((filter) => filter.category))];

const initialState = {
  homeFood: [],
  allHomeFoods: [],
  AllFoodCategories: allFilter,
  category: "breakfast",
  isQuickSub: false,
  foodId: null,
  filteredSearch: [],
};

export const HomeProdProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: GET_HOME_PRODUCTS,
      payLoad: HomefoodData,
    });
  }, [state.category]);

  const filterFeaturedProducts = (value) => {
    // let value = e.target.value;
    // let name = e.target.name;

    dispatch({
      type: FILTER_FEATURED_PRODUCTS,
      payLoad: value,
    });
  };

  useEffect(() => {
    // filterFeaturedProducts();
  }, []);

  const prodSubOpen = (id) => {
    dispatch({ type: QUICKBUY_OPEN, payLoad: id });
  };

  const prodSubClose = () => {
    dispatch({ type: QUICKBUY_CLOSE });
  };

  return (
    <HomeContext.Provider
      value={{
        ...state,
        prodSubOpen,
        prodSubClose,
        filterFeaturedProducts,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeProd = () => {
  return useContext(HomeContext);
};
