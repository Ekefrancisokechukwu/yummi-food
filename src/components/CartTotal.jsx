import { GiNotebook } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatedPrice } from "../utils/helpers";

const CartTotal = () => {
  const { total_amount } = useCartContext();
  return (
    <footer className="  p-5 shadow-lg">
      <header className="flex items-center justify-between">
        <div className="text-center ">
          <GiNotebook className="text-[2rem]" />
          <span className="text-[.8rem]">Add note</span>
        </div>

        <div className="">
          <TbTruckDelivery className="text-[2rem]" />
          <span className="text-[.8rem]">Shipping</span>
        </div>

        <div className="">
          <HiOutlineGiftTop className="text-[2rem]" />
          <span className="text-[.8rem]">Discount</span>
        </div>
      </header>
      <hr />
      <div className="mt-3">
        <div className="flex justify-between text-xl">
          <h1>Subtotal</h1>
          <h2>{formatedPrice(total_amount)}</h2>
        </div>
        <p className="mt-4 text-sm">
          Taxes and shipping calculated at checkout
        </p>
      </div>
      <div className="mt-4 px-7 text-center  text-white">
        <Link className="transition-color block bg-rose-700 p-2 text-2xl  duration-500 hover:bg-gray-800">
          CHECKOUT
        </Link>
        <Link
          disabled={true}
          className="mt-5 block cursor-not-allowed bg-rose-700 p-2 text-2xl opacity-40"
        >
          VIEW CART
        </Link>
      </div>
    </footer>
  );
};
export default CartTotal;
