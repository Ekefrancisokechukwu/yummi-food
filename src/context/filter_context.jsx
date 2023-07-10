import { createContext, useContext, useEffect, useReducer } from "react";
import { useHomeProd } from "./home_prod-context";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
} from "../actions";

const FilterContext = createContext();

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "low",
  clear: false,

  filters: {
    search: "",
    price: 0,
    max_price: 0,
    min_price: 0,
    cuisines: "all",
    prodType: "all",
  },
};

export const FilterProvider = ({ children }) => {
  const { allHomeFoods } = useHomeProd();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allHomeFoods });
  }, [allHomeFoods]);

  const listViewHandle = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const gridViewHandle = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const upDateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [allHomeFoods, state.sort, state.filters]);

  const updateFilter = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "prodType") {
      value = e.target.textContent;
    }

    if (name === "cuisines") {
      value = e.target.textContent;
    }

    if (name === "price") {
      value = Number(value);
    }

    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        listViewHandle,
        gridViewHandle,
        upDateSort,
        updateFilter,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
