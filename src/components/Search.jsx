import { AnimatePresence, motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import SearchGlobal from "./SearchGlobal";
import { useHomeProd } from "../context/home_prod-context";
import { useState } from "react";

const variants = {
  hidden: {
    y: "-100rem",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.7,
    },
  },
};

const Search = () => {
  const { isSearchVisible, closeSearchbar } = useGlobalContext();
  const { allHomeFoods } = useHomeProd();
  const [Filtered, setFiltered] = useState([]);
  const [text, setText] = useState("");

  const updateGlobalFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    const newFoodFiltered = allHomeFoods.filter((item) => {
      return item.title.toLowerCase().includes(value);
    });

    if (value === "") {
      setFiltered([]);
      return;
    }

    setFiltered(newFoodFiltered);
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        className="fixed left-0 top-0 z-40 h-[90vh] w-full bg-white/20  backdrop-brightness-50"
        variants={variants}
        animate={isSearchVisible ? "visible" : "hidden"}
      >
        <div className="mx-auto mt-24 flex justify-center tablet:w-[25rem] ">
          <input
            type="search"
            placeholder="Search"
            className="w-[25rem] p-3 outline-none mm:w-[12rem] mm:p-0"
            value={text}
            onChange={updateGlobalFilter}
          />
          <button className="bg-rose-700 p-3 px-6  transition duration-300 hover:bg-yellow-500  mm:p-1">
            <CiSearch className="text-xl text-[#ffff]" />
          </button>
          <MdOutlineCancel
            className="ml-5 cursor-pointer self-center text-[1.6rem]"
            onClick={closeSearchbar}
          />
        </div>
        <SearchGlobal Filtered={Filtered} text={text} setText={setText} />
      </motion.div>
    </AnimatePresence>
  );
};
export default Search;
