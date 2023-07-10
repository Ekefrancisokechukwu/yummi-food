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

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id);

    if (tempItem) {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, isCartOpen: true, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: product.title,
        amount,
        price: product.price,
        image: product.image,
        max: product.stock,
        cuisines: product.cuisines,
      };

      return { ...state, isCartOpen: true, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === OPEN_CART) {
    return { ...state, isCartOpen: true };
  }
  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpen: false };
  }

  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: [...tempCart] };
  }

  if (action.type === TOGGLE_CART_AMOUNT) {
    // let tempCart = state.cart.filter((item) => item.id !== action.payload);
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_amount, total_items };
  }

  if (action.type === ADD_TO_WISHLIST) {
    const { id, product, amount } = action.payload;

    const tempItem = state.wishlist.find((i) => i.id === id);

    if (tempItem) {
      let templist = state.wishlist.map((item) => {
        if (item.id === id) {
          return { ...item };
        } else {
          return item;
        }
      });

      return {
        ...state,
        inWishList: true,
        wishlist: templist,
      };
    } else {
      const newItem = {
        name: product.title,
        price: product.price,
        amount,
        id: id,
        image: product.image,
      };

      return {
        ...state,
        inWishList: false,

        wishlist: [...state.wishlist, newItem],
      };
    }
  }

  if (action.type === REMOVE_WISHLIST_ITEM) {
    const tempWish = state.wishlist.filter((i) => i.id !== action.payload);

    return { ...state, wishlist: tempWish };
  }

  if (action.type === COUNT_WISHLIST_TOTALS) {
    const { wishlist_amount } = state.wishlist.reduce(
      (total, item) => {
        const { amount } = item;

        total.wishlist_amount += amount;
        return total;
      },
      {
        wishlist_amount: 0,
      }
    );

    return { ...state, wishlist_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
