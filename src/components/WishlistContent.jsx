import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import WishListTable from "./WishListTable";
import { useCartContext } from "../context/cart_context";

const WishlistContent = () => {
  const { wishlist } = useCartContext();

  if (wishlist.length < 1) {
    return (
      <div className="grid place-items-center">
        <h1 className="text-3xl font-semibold text-gray-600">
          Nothing found in wishlist!
        </h1>

        <GiShoppingCart className="text-[15rem]" />

        <Link to='/shop' className="bg-rose-600 px-6 py-3 text-lg font-semibold uppercase text-white transition duration-300 hover:bg-yellow-500">
          continue shopping
        </Link>
      </div>
    );
  }

  return <WishListTable />;
};
export default WishlistContent;
