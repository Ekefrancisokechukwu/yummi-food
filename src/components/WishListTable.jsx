import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { useCartContext } from "../context/cart_context";
import { formatedPrice } from "../utils/helpers";
import { motion } from "framer-motion";

const WishListTable = () => {
  const { wishlist, removeWishListItem } = useCartContext();

  return (
    <table className="table-auto">
      <thead className="bg-rose-600 xl:hidden">
        <tr>
          <th>IMAGE</th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>PURCHASE</th>
          <th>REMOVE</th>
        </tr>
      </thead>
      <motion.tbody layout>
        {wishlist.map((item) => {
          return (
            <motion.tr
              layout
              className="items-center overflow-scroll text-center align-middle transition-all duration-500 hover:bg-gray-100/40 xl:flex xl:flex-col xl:p-4"
              key={item.id}
            >
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 mm:w-full"
                />
              </td>
              <td>
                <h1 className="px-12 text-xl capitalize mm:px-4">
                  {item.name}
                </h1>
              </td>
              <td>{formatedPrice(item.price)}</td>
              <td className="px-24 mm:px-3">
                <Link
                  to={`/shop/${item.id}`}
                  className="bg-rose-600 p-3 text-[1.1rem] uppercase text-white transition duration-500 hover:bg-yellow-500"
                >
                  select options
                </Link>
              </td>
              <td className="px-16">
                <span
                  className="cursor-pointer text-xl transition-colors  hover:text-yellow-500"
                  onClick={() => removeWishListItem(item.id)}
                >
                  <BsTrash3 />
                </span>
              </td>
            </motion.tr>
          );
        })}
      </motion.tbody>
    </table>
  );
};
export default WishListTable;
