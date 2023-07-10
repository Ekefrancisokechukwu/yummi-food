import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Filters from "../components/Filters";
import Products from "../components/Products";
import Sort from "../components/Sort";
import { SearchShop } from "../components/SearchShop";

const Shop = () => {
  return (
    <>
      <PageHero>
        <div className="">
          <h1 className="text-[2rem] font-bold uppercase tracking-wider">
            collections
          </h1>
          <Link to="/" className="mt-3 inline-block hover:text-yellow-600">
            {" "}
            Home{" "}
          </Link>{" "}
          / <span>products</span>
        </div>
      </PageHero>

      <div className="px-20 py-24 tablet:px-5">
        <SearchShop />

        <div className="grid   grid-cols-[20rem_auto] items-start gap-4 xs:grid-cols-[15rem_auto] tablet:grid-cols-1 ">
          <div className="filters">
            <Filters />
          </div>

          <div className="products">
            <div className=""></div>
            <div className="">
              <Sort />
              <Products />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
