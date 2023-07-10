import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import WishlistContent from "../components/WishlistContent";

const WishList = () => {
  return (
    <main className="">
      <PageHero>
        <div className="">
          <h1 className="mb-5 text-4xl">WISHLIST</h1>
          <Link to="/" className="transition-colors hover:text-yellow-500">
            Home
          </Link>{" "}
          / <span> Wishlist</span>
        </div>
      </PageHero>
      <section className="grid place-items-center px-8 py-11">
        <WishlistContent />
      </section>
    </main>
  );
};
export default WishList;
