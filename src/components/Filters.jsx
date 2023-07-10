import { BiSolidChevronDown } from "react-icons/bi";
// import { useState } from "react";
import { useFilterContext } from "../context/filter_context";
import { MdOutlineCancel } from "react-icons/md";
import { formatedPrice, getUniqueValues } from "../utils/helpers";

import Bestseller from "./Bestseller";
import { Link } from "react-router-dom";
// import { useFilterContext } from "../context/filter_context";

const Filters = () => {
  // const [toggle, setToggle] = useState(false);
  const {
    updateFilter,
    clearFilters,
    all_products,
    clear,
    filters: { price, max_price, min_price, cuisines, prodType },
  } = useFilterContext();

  const cuisinesCategory = getUniqueValues(all_products, "cuisines");
  const productType = getUniqueValues(all_products, "category");

  return (
    <section className="grid gap-4 tracking-widest tablet:hidden">
      <h1 className="border-l-[5px] border-rose-700 bg-black/75 px-3 py-2.5 text-white">
        Filter:
      </h1>

      {clear && (
        <button
          onClick={clearFilters}
          className="flex  w-28 items-center gap-3 bg-yellow-400 p-1 text-[.9rem] text-white shadow transition duration-300 hover:bg-rose-700 hover:shadow-xl"
        >
          Remove All <MdOutlineCancel />
        </button>
      )}
      <form
        className="grid gap-4 text-gray-900"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* price start */}
        <div>
          <h1 className="flex cursor-pointer items-center justify-between border-l-[5px] border-rose-700 bg-black px-3 py-2.5 text-white">
            Price <BiSolidChevronDown />
          </h1>
          <div className="">
            <div className="px-3 py-2.5">
              <h2 className="text-lg text-gray-600">
                The highest price is {formatedPrice(price)}
              </h2>
              <input
                name="price"
                value={price}
                min={min_price}
                max={max_price}
                type="range"
                className="mt-4 w-full"
                onChange={updateFilter}
              />
            </div>
          </div>
        </div>
        {/* price start end*/}

        {/* products type */}
        <div>
          <h1
            className="flex cursor-pointer items-center justify-between border-l-[5px] border-rose-700 bg-black px-3 py-2.5 text-white"
            // onClick={() => setToggle(!toggle)}
          >
            Product type <BiSolidChevronDown />
          </h1>
          <div className="">
            <div className="px-3 py-2.5">
              {productType.map((p, index) => {
                return (
                  <button
                    name="prodType"
                    key={index}
                    className={`block capitalize ${
                      prodType === p ? "text-rose-800" : ""
                    }`}
                    onClick={updateFilter}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* products type end*/}

        {/* cuisines start */}
        <div>
          <h1 className="flex cursor-pointer items-center justify-between border-l-[5px] border-rose-700 bg-black px-3 py-2.5 text-white">
            Cuisines <BiSolidChevronDown />
          </h1>
          <div className="contan">
            <div className="px-3 py-2.5">
              {cuisinesCategory.map((c, index) => {
                return (
                  <div className="flex items-center gap-4" key={index}>
                    <button
                      className={`capitalize ${
                        cuisines === c ? "text-rose-700" : null
                      }`}
                      name="cuisines"
                      onClick={updateFilter}
                    >
                      {c}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* cuisines end */}
        {/* type start */}
        <div className="">
          <div className="">
            <h1 className="flex cursor-pointer items-center justify-between border-l-[5px] border-rose-700 bg-black px-3 py-2.5 text-white">
              Type <BiSolidChevronDown />
            </h1>
            <div className="contain">
              <div className="px-3 py-2.5 opacity-40">
                <div className="flex items-center gap-4">
                  <input type="checkbox" id="non-veg" className="" disabled />
                  <label htmlFor="non-veg">non-veg</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" id="veg" className="" disabled />
                  <label htmlFor="veg">veg</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* type end */}
        {/*  category start*/}
        <div className="">
          <h1 className="flex cursor-pointer items-center justify-between border-l-[5px] border-rose-700 bg-black px-3 py-2.5 text-white">
            Type <BiSolidChevronDown />
          </h1>
          <div className=""></div>
        </div>
        {/*  category end*/}
      </form>

      <div className="">
        <h1 className="flex cursor-pointer items-center justify-between border-l-[5px] border-rose-700 bg-black px-3 py-2.5 text-white">
          Bestseller
        </h1>

        <Bestseller />

        <div className="mt-14 text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0267/5979/0615/files/6_669fe6c2-572f-4cbc-9c53-2769ec57fbc2_750x.png?v=1614335090"
            alt=""
          />

          <button
            disabled
            className="mt-11 inline-block bg-rose-700 px-6 py-2 text-3xl  text-white opacity-70"
          >
            Shop
          </button>
        </div>
      </div>
    </section>
  );
};
export default Filters;
