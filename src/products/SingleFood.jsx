import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { formatedPrice } from "../utils/helpers";
import { Tooltip } from "react-tooltip";

import { SingleProdWrapper } from "./SingleProdStyle";
import { Link } from "react-router-dom";
import { useHomeProd } from "../context/home_prod-context";
import { useCartContext } from "../context/cart_context";
import { HomefoodData } from "./data";

const SingleFood = ({ title, image, price, id }) => {
  const { prodSubOpen } = useHomeProd();
  const { addToCart, addToWishList, inWishList } = useCartContext();

  const product = HomefoodData.find((i) => i.id === id);
  console.log(product);
  let amount = +1;

  return (
    <SingleProdWrapper>
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="bg-gray-200/30 p-5 text-center">
        <div
          className="relative border-b pb-[1.5rem] before:absolute
         before:bottom-0 before:left-0
         before:h-[.124rem] before:w-[100%] before:scale-0
         before:bg-rose-700  before:transition-all before:duration-300 group-hover:before:scale-100"
        >
          <div className="flex justify-center gap-1 text-yellow-400 sm:text-xs ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>

          <Link
            to={`/shop/${id}`}
            className=" mt-2.5  text-xl  capitalize text-black transition-colors hover:text-rose-700 sm:text-sm"
          >
            {title}
          </Link>
          <span
            className="absolute -bottom-[.65rem] left-[50%] inline-block  h-[1.5rem] w-[1.5rem] translate-x-[-50%] rotate-[45deg]  
           bg-white before:absolute before:left-[50%] before:top-[50%]
            before:h-[.8rem] before:w-[.8rem] before:translate-x-[-50%]
            before:translate-y-[-50%] before:bg-rose-700
            "
          ></span>
        </div>
        <h4 className="mt-3 text-lg text-gray-700">{formatedPrice(price)}</h4>
      </div>

      <div className="absolute right-6  top-28 z-10 translate-x-[30rem]  opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 ">
        <ul>
          <li
            className="prod-tootip"
            data-tooltip-content="Quick buy"
            onClick={() => prodSubOpen(id)}
          >
            <Link className="relative  inline-block bg-rose-700  p-[.9rem] text-[1rem]  text-white transition-colors hover:bg-yellow-500">
              <FaRegEye />
            </Link>
          </li>

          <li
            className="prod-tootip"
            data-tooltip-content="Add to cart"
            onClick={() => addToCart(id, amount, product)}
          >
            <span className="inline-block cursor-pointer bg-rose-700 p-[.9rem]  text-[1rem] text-white  transition-colors hover:bg-yellow-500">
              <TbShoppingBag />
            </span>
          </li>
          <li
            className="prod-tootip"
            data-tooltip-content="Add to wishlist"
            onClick={() => addToWishList(id, amount, product)}
          >
            <Link
              className={`inline-block bg-rose-700 p-[.9rem]  text-[1rem] text-white transition-colors hover:bg-yellow-500 
 `}
            >
              <AiOutlineHeart />
            </Link>
          </li>

          <Tooltip
            className="rounded-none bg-rose-700 px-4 py-1 text-[.8rem]"
            anchorSelect=".prod-tootip"
            place="left"
          ></Tooltip>
        </ul>
      </div>
    </SingleProdWrapper>
  );
};
export default SingleFood;
