import { useCartContext } from "../context/cart_context";
import { MdOutlineCancel } from "react-icons/md";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import CartTotal from "./CartTotal";

const AsideCart = () => {
  const { isCartOpen, setCartClose } = useCartContext();
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div
        className={` transition-all duration-300 ${
          isCartOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`fixed z-30 h-screen w-screen bg-rose-700/30 ${
            isCartOpen ? "" : ""
          }`}
          onClick={setCartClose}
        ></div>
        <aside
          className={`fixed right-0 top-0 z-30 h-screen w-96 bg-white  text-gray-600 transition-all duration-500 ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-2 py-4 shadow-lg">
            <h1 className="text-2xl">Shopping cart</h1>
            <MdOutlineCancel
              className=" cursor-pointer text-3xl hover:text-yellow-500"
              onClick={setCartClose}
            />
          </div>

          <div className="mt-8 grid h-[80%] place-items-center">
            <div className="text-center">
              <h1 className="mb-9 text-3xl font-semibold">
                Your cart is empty
              </h1>
              <button
                className="mb-9 bg-rose-700 p-2.5 text-xl text-white hover:bg-yellow-500 "
                onClick={setCartClose}
              >
                CONTINUE SHOPPING
              </button>

              <h1 className="mb-5 mt-9 text-[1.3rem]">Have an account?</h1>

              <h4>
                <Link className="mb-10 hover:text-yellow-500">Log in</Link> to
                check out faster
              </h4>
            </div>
          </div>
        </aside>
      </div>
    );
  }

  return (
    <>
      <div
        className={` transition-all duration-300 ${
          isCartOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`fixed z-30 h-screen w-screen bg-rose-700/30 ${
            isCartOpen ? "" : ""
          }`}
          onClick={setCartClose}
        ></div>
        <aside
          className={`fixed right-0 top-0 z-30 h-screen w-96 overflow-scroll bg-white text-gray-600  transition-all duration-500 mm:w-full ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-2 py-4 shadow-lg">
            <h1 className="text-2xl">Shopping cart</h1>
            <MdOutlineCancel
              className=" cursor-pointer text-3xl hover:text-yellow-500"
              onClick={setCartClose}
            />
          </div>
          <motion.div
            role="list"
            className="grid   gap-4 divide-y  divide-slate-200"
          >
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </motion.div>
          <CartTotal />
        </aside>
      </div>
    </>
  );
};
export default AsideCart;
