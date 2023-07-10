import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTER,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
} from "../actions";

const filter_Reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;

    let tempProducts = [...filtered_products];

    if (sort === "low") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "high") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "a-z") {
      tempProducts = tempProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }
    if (sort === "z-a") {
      tempProducts = tempProducts.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }

  if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload;

    return {
      ...state,
      clear: true,
      filters: { ...state.filters, [name]: value },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { search, prodType, cuisines, price } = state.filters;
    let tempProducts = [...all_products];

    if (search) {
      tempProducts = tempProducts.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (prodType !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === prodType
      );
    }

    if (cuisines !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.cuisines === cuisines
      );
    }

    // price
    tempProducts = tempProducts.filter((product) => product.price <= price);

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }

  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      clear: false,

      filters: {
        ...state.filters,
        search: "",
        price: state.filters.max_price,
        cuisines: "all",
        prodType: "all",
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_Reducer;
