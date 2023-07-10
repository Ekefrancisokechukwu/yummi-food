/* eslint-disable react/no-unescaped-entities */
import { useHomeProd } from "../context/home_prod-context";
import { AiFillStar } from "react-icons/ai";
import { formatedPrice } from "../utils/helpers";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import { HomefoodData } from "../products/data";
import { motion } from "framer-motion";

const HomeProducts = () => {
  const { isQuickSub, foodId, prodSubClose } = useHomeProd();

  const product = HomefoodData.find((food) => food.id === foodId);
  const image = product?.image;
  const title = product?.title;
  const price = product?.price;
  const category = product?.category;
  const id = product?.id;
  const stock = product?.stock;

  return (
    <motion.section
      layout
      className={`${
        isQuickSub ? "visible  z-40 " : "invisible"
      } z-40 transition-all duration-300`}
    >
      <div
        className="fixed top-0 z-20 h-screen w-screen bg-black/50"
        onClick={prodSubClose}
      ></div>

      <div
        className={`fixed left-[50%] top-[50%] z-20  grid h-[70%] w-[65rem] translate-x-[-50%] 
    translate-y-[-50%] grid-cols-2 gap-3 bg-white py-4 shadow-lg xl:flex xl:h-3/4 xl:w-auto xl:flex-col
     xl:overflow-scroll
     xl:p-3
     ${
       isQuickSub ? "visible opacity-100" : "hidden opacity-0"
     } transition-all duration-700
    `}
      >
        <div className="h-[27rem] w-full ">
          <img src={image} alt="" className="xl:h-80 xl:w-80" />
        </div>

        {/* start */}
        <div className="overflow-y-scroll pr-7 xl:overflow-visible">
          <h1 className="flex items-center justify-between text-2xl font-bold  capitalize text-gray-600">
            {title}
            <span
              className="cursor-pointer text-4xl transition-transform duration-300 hover:rotate-[360deg] hover:text-yellow-500"
              onClick={prodSubClose}
            >
              &times;
            </span>
          </h1>{" "}
          <p className="mt-4">
            Everyone has a different idea of what they mean by the word
            "fitness," but it generally refers to their level of health and
            well-being. Being fit involves all three facets...
          </p>
          <div className="mt-4 flex text-xl text-yellow-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          ({stock} customers reviews)
          <div className="mt-3">
            <p className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">Price : </span>
              {formatedPrice(price)}
            </p>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">type : </span>
              <div className="text-[1rem]   capitalize">
                <span className="mini-check">non - veg</span>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">cuisines : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <span className="mini-check">korean</span>
                <span className="mini-check">japanese</span>
                <span className="mini-check">chinese</span>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">meat : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <span className="mini-check">beef</span>
                <span className="mini-check">chicken</span>
                <span className="mini-check">lamp</span>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">vendor : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <Link className=" hover:text-rose-600">catch</Link>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">type : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <span className=" hover:text-rose-600">{category}</span>
              </div>
            </div>
            <AddToCart {...product} product={product} />
          </div>
          <Link
            to={`/shop/${id}`}
            onClick={prodSubClose}
            className="group  mt-6 flex items-center gap-3 underline-offset-4 hover:text-rose-700 hover:underline"
          >
            View full detail{" "}
            <BsArrowRightShort className="group-hover:scale-150" />
          </Link>
        </div>

        {/* end */}
      </div>
    </motion.section>
  );
};
export default HomeProducts;
