import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const Products = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // console.log(products);

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  if (products.length < 1) {
    return (
      <h1 className="text-center text-3xl text-gray-800">
        Sorry no matching products....
      </h1>
    );
  }

  return <GridView products={products} />;
};

export default Products;
