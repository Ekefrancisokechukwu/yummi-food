import { SingleProdWrapper } from "../products/SingleProdStyle";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { formatedPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useHomeProd } from "../context/home_prod-context";

const ListView = ({ products }) => {
  const { prodSubOpen } = useHomeProd();
  return (
    <div className="grid gap-3">
      {products.map((product) => {
        const { image, price, title, id } = product;
        return (
          <SingleProdWrapper key={id}>
            <article className="group grid grid-cols-[20rem_auto] border border-gray-100/75">
              <div className="relative overflow-hidden">
                <img src={image} alt={title} />
                <article className="list-nav ease -translate-y-2/4 translate-x-[20rem] transition-all duration-500 group-hover:translate-x-0">
                  <div
                    className="cursor-pointer  bg-rose-700 p-2 transition-all duration-300 hover:bg-yellow-500"
                    onClick={() => prodSubOpen(id)}
                  >
                    <FaRegEye className="text-[1.3rem] text-white" />
                  </div>
                  <div className="cursor-pointer bg-rose-700 p-2 transition-all duration-300 hover:bg-yellow-500">
                    <AiOutlineHeart className="text-[1.3rem] text-white" />
                  </div>
                  <div className="cursor-pointer bg-rose-700 p-2 transition-all duration-300 hover:bg-yellow-500">
                    <TbShoppingBag className="text-[1.3rem] text-white" />
                  </div>
                </article>
              </div>

              <div className="grid grid-cols-[13rem_auto] items-center gap-3 bg-gray-300/20 p-4">
                <div className="">
                  <div
                    className="before:  relative border-b py-3
                     after:absolute after:bottom-0 after:left-0 after:h-[.14rem]
                  after:w-full after:scale-0 after:bg-rose-700
                  after:transition-all after:duration-300
                  group-hover:after:scale-100
                  "
                  >
                    <span
                      className="absolute -bottom-1.5 left-2/4 z-10 h-3.5 
                     w-3.5 -translate-x-2/4  rotate-45 bg-white
                     after:absolute
                     after:left-2/4
                     after:top-2/4
                     after:h-2/3
                     after:w-2/3
                     after:-translate-x-2/4
                     after:-translate-y-2/4
                     after:bg-rose-700
                    "
                    ></span>
                    <div className="mb-2 flex gap-1 text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <Link
                      to={`/shop/${id}`}
                      className="text-gray-95000 text-[1.1rem] font-[500] capitalize transition-colors duration-300 hover:text-rose-700"
                    >
                      {title}
                    </Link>
                  </div>
                  <h3 className="mt-3">{formatedPrice(price)}</h3>
                </div>
                <div className="">
                  Everyone has a different idea of what they mean by the word
                  "fitness," but it generally refers to their level of health
                  and well-being. Being fit involves all three facets...
                </div>
              </div>
            </article>
          </SingleProdWrapper>
        );
      })}
    </div>
  );
};
export default ListView;
