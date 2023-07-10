import { Link, useParams } from "react-router-dom";
import { useHomeProd } from "../context/home_prod-context";
import PageHero from "../components/PageHero";
import { HomefoodData } from "../products/data";
import { formatedPrice } from "../utils/helpers";
import ProductImage from "../components/ProductImage";
import AddToCart from "../components/AddToCart";

const SingleProduct = () => {
  const { productId } = useParams();

  const id = Number(productId);

  // const { allHomeFoods } = useHomeProd();

  const product = HomefoodData.find((item) => {
    return item.id === id;
  });

  const { image, category, title, price, images, stock } = product;

  return (
    <>
      <PageHero>
        <div>
          <h1 className="text-[2rem]">PRODUCT</h1>
          <Link to="/shop" className="mt-4 inline-block hover:text-yellow-500">
            All
          </Link>{" "}
          / <span className="capitalize"> {title}</span>
        </div>
      </PageHero>

      <div className="mx-auto my-0 grid w-[80%] grid-cols-2  py-24  text-gray-700 tablet:w-full  tablet:grid-cols-1 tablet:px-10">
        {images ? <ProductImage images={images} /> : <img src={image} alt="" />}
        <div>
          <h1 className="text-[2.1rem] font-bold capitalize tablet:text-2xl">
            {title}
          </h1>
          <p className="mt-4">
            Everyone has a different idea of what they mean by the word
            "fitness," but it generally refers to their level of health and
            well-being. Being fit involves all three facets...
          </p>

          <div className="mt-5">rating(2)</div>

          <div className="mt-3">
            <p className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">Price : </span>
              {formatedPrice(price)}
            </p>

            <div className="mb-6 grid grid-cols-[1fr_19rem]  items-center tablet:gap-3">
              <span className="text-[1.2rem]  capitalize">type : </span>
              <div className="text-[1rem]   capitalize">
                <span className="mini-check">non - veg</span>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center tablet:gap-3">
              <span className="text-[1.2rem]  capitalize">cuisines : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <span className="mini-check">korean</span>
                <span className="mini-check">japanese</span>
                <span className="mini-check">chinese</span>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center tablet:gap-3">
              <span className="text-[1.2rem]  capitalize">meat : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <span className="mini-check">beef</span>
                <span className="mini-check">chicken</span>
                <span className="mini-check">lamp</span>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center tablet:gap-3">
              <span className="text-[1.2rem]  capitalize">vendor : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <Link className=" hover:text-rose-600">catch</Link>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-[1fr_19rem] items-center">
              <span className="text-[1.2rem]  capitalize">type : </span>
              <div className="flex gap-2 text-[1rem]   capitalize">
                <span className=" hover:text-rose-600">{category}</span>
              </div>
            </div>

            <AddToCart {...product} product={product} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
