import {
  FILTER_FEATURED_PRODUCTS,
  GET_HOME_PRODUCTS,
  QUICKBUY_CLOSE,
  QUICKBUY_OPEN,
} from "../actions";

const homeProdReducer = (state, action) => {
  if (action.type === GET_HOME_PRODUCTS) {
    const featured = action.payLoad.filter((item) => item.featured === true);

    return {
      ...state,
      homeFood: featured,
      allHomeFoods: action.payLoad,
    };
  }

  if (action.type === FILTER_FEATURED_PRODUCTS) {
    const newFeaturedProducts = state.homeFood.filter(
      (prod) => prod.category === action.payLoad
    );

    // console.log(newFeaturedProducts);

    return {
      ...state,
      homeFood: newFeaturedProducts,
      category: action.payLoad,
    };
  }

  if (action.type === QUICKBUY_OPEN) {
    window.document.body.style.overflow = "hidden";
    return { ...state, isQuickSub: true, foodId: action.payLoad };
  }

  if (action.type === QUICKBUY_CLOSE) {
    window.document.body.style.overflow = "";
    return { ...state, isQuickSub: false };
  }

  throw new Error(`No Matching ${action.type} action type`);
};

export default homeProdReducer;
