import { CiSearch } from "react-icons/ci";
import { useFilterContext } from "../context/filter_context";

export const SearchShop = () => {
  const { updateFilter, search } = useFilterContext();

  return (
    <div className="mb-12">
      <h1 className="mb-6 text-center text-3xl text-gray-500 ">
        Search results
      </h1>

      <form
        className="mx-auto mt-0 flex max-w-md items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          name="search"
          value={search}
          className="w-full border border-slate-800 p-2 outline-none"
          placeholder="search..."
          onChange={updateFilter}
        />
        <button className="bg-rose-700 p-3 text-xl text-white transition-all duration-300 hover:bg-yellow-500">
          <CiSearch />
        </button>
      </form>
    </div>
  );
};
