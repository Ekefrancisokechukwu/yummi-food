import { PiListDashesFill } from "react-icons/pi";
import { CgMenuGridR } from "react-icons/cg";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    listViewHandle,
    gridViewHandle,
    upDateSort,
    sort,
  } = useFilterContext();

  return (
    <div className="mb-10 flex items-center justify-between gap-2 border border-yellow-400 p-3 tablet:flex-col sm:hidden">
      <div className="">
        <button
          className={`border border-yellow-400 p-1 text-[1.7rem] ${
            !grid_view ? "bg-yellow-500" : null
          }`}
          onClick={listViewHandle}
        >
          <PiListDashesFill />
        </button>
        <button
          onClick={gridViewHandle}
          className={`border border-yellow-400 p-1 text-[1.7rem] ${
            grid_view ? "bg-yellow-500" : null
          }`}
        >
          <CgMenuGridR />
        </button>
      </div>

      <div className="">
        <div className="flex items-center gap-4">
          <form className="bg-rose-700 p-1">
            <label htmlFor="sort" className="font-bold text-white">
              sort by:
            </label>

            <select
              name="sort"
              id="sort"
              className="border-3 target:   border-red-700 
              bg-white
              p-1
              text-gray-700
              outline-none
              "
              value={sort}
              onChange={upDateSort}
            >
              <option value="a-z">Alphabetically, A-Z</option>
              <option value="z-a">Alphabetically, Z-A</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price,high to low</option>
            </select>
          </form>
        </div>
      </div>
      <h2 className="text-[1.3rem] text-gray-900">
        {products.length} products
      </h2>
    </div>
  );
};

export default Sort;
