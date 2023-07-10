import { Link } from "react-router-dom";
import { useHomeProd } from "../context/home_prod-context";
import { formatedPrice } from "../utils/helpers";
import { useGlobalContext } from "../context/context";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const SearchGlobal = ({ Filtered, text, setText }) => {
  const { closeSearchbar } = useGlobalContext();

  const clearInput = () => {
    setText("");
    closeSearchbar();
  };

  return (
    <>
      {Filtered.length != 0 && (
        <div className="mx-[29.5rem]  mt-[.1rem] w-[32%]  bg-white shadow-lg xl:mx-auto xl:w-[30rem] tablet:w-[24rem] mm:w-[15rem]">
          <h1 className="p-1 text-xs text-gray-800">PRODUCTS</h1>
          <hr />
          <motion.ul
            layout
            role="list"
            className="h-64 divide-y divide-slate-200 overflow-y-scroll"
          >
            {Filtered.slice(0, 3).map((item, index) => {
              console.log();
              return (
                <motion.li key={index} layout>
                  <Link
                    to={`/shop/${item.id}`}
                    onClick={closeSearchbar}
                    className="group flex items-center gap-2 hover:bg-gray-200/30"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 mm:w-10"
                    />

                    <div className="">
                      <h5 className="capitalize transition-colors group-hover:text-rose-600 mm:text-sm">
                        {item.title}
                      </h5>
                      <h6>{formatedPrice(item.price)}</h6>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
          <Link
            to="/shop"
            className="group flex items-center justify-between p-4"
            onClick={clearInput}
          >
            <h2>search for "{text.substring(0, 1).toUpperCase()}"</h2>
            <HiOutlineArrowNarrowRight className="group-hover:scale-125" />
          </Link>
        </div>
      )}
    </>
  );
};
export default SearchGlobal;
