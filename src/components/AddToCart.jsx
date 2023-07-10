import { useState } from "react";
import AmountButton from "./AmountButton";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ stock, id, product }) => {
  const { addToCart, addToWishList } = useCartContext();
  const [amount, setAmount] = useState(1);

  // console.log(product);

  const increase = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }

      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  };
  return (
    <div className="mt-6">
      <div className="mb-6 grid grid-cols-[1fr_19rem] items-center">
        <span className="text-[1.2rem]  capitalize">Quantity : </span>
        <AmountButton decrease={decrease} increase={increase} amount={amount} />
      </div>
      <div className="flex w-[20rem] flex-wrap justify-between gap-3">
        <button
          className="cart-btn"
          onClick={() => addToCart(id, amount, product)}
        >
          ADD TO CART
        </button>

        <button
          className="cart-btn"
          onClick={() => addToWishList(id, amount, product)}
        >
          ADD TO WISHLIST
        </button>
        <button className="cart-btn w-full">BUY IT NOW</button>
      </div>
    </div>
  );
};
export default AddToCart;
