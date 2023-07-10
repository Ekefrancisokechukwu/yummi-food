import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useHomeProd } from "../context/home_prod-context";

const Filter = ({ slideBtn }) => {
  const { AllFoodCategories, filterFeaturedProducts, category } = useHomeProd();

  return (
    <div className="flex items-center justify-between tablet:hidden">
      <div className="flex items-center gap-1">
        {AllFoodCategories.map((btn) => {
          return (
            <button
              name="category"
              key={btn}
              value={btn}
              className={`inline-block bg-yellow-500 px-[1rem] py-[.8rem] uppercase text-[1.0.4rem] text-white transition duration-500 hover:bg-rose-700 
              
              ${category === btn ? "bg-rose-700" : null}
              `}
              onClick={() => filterFeaturedProducts(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        <button
          className="bg-rose-700 p-2.5 text-xl text-white "
          onClick={() => slideBtn.slidePrev()}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          className="bg-rose-700 p-2.5 text-xl text-white"
          onClick={() => slideBtn.slideNext()}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};
export default Filter;
