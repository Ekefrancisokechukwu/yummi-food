import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import AmountButton from "./AmountButton";
import { formatedPrice } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";
import { motion } from "framer-motion";

const CartItem = ({ image, name, price, id, amount }) => {
  const { removeCartItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <motion.div className=" grid grid-cols-3 justify-items-center  py-8 ">
      <img src={image} alt={name} className="w-24" />
      <div className="flex flex-col gap-2">
        <Link
          to={`/shop`}
          className="text-lg font-semibold capitalize transition-colors hover:text-rose-700"
        >
          {name}{" "}
        </Link>
        <h5>{formatedPrice(price)}</h5>
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
      </div>

      <div
        className="grid h-8 w-8 cursor-pointer place-items-center self-start rounded-full text-2xl shadow transition-all duration-500 hover:bg-black  hover:text-white"
        onClick={() => removeCartItem(id)}
      >
        <MdOutlineCancel />
      </div>
    </motion.div>
  );
};

export default CartItem;
