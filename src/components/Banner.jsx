import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner p-[15rem] tablet:px-[5rem] sm:p-12">
      <div className="text-center">
        <h3 className="text-xl capitalize text-gray-700">
          enjoy greate recipe
        </h3>
        <h1 className="mt-5 text-5xl capitalize text-rose-600 sm:text-3xl ">
          Simple And Delicious Food
        </h1>
        <h2 className="mt-5 text-3xl capitalize text-gray-700">
          flat 20% discount
        </h2>
        <Link to="/shop">
          <button className="mt-5 bg-rose-600 p-[.5rem] text-[1.3rem] text-white transition duration-300 hover:bg-yellow-500">
            shop now
          </button>
        </Link>
      </div>
    </section>
  );
};
export default Banner;
