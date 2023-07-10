import SingleFood from "../products/SingleFood";
import { motion } from "framer-motion";

const GridView = ({ products }) => {
  return (
    <motion.div
      className="grid-content grid grid-cols-3 gap-6 tablet:grid-cols-2 sm:gap-4"
      layout
    >
      {products.map((product) => {
        return <SingleFood key={product.id} {...product} />;
      })}
    </motion.div>
  );
};
export default GridView;
