import { Link } from "react-router-dom";

const SingleGallery = ({ name, title, img }) => {
  return (
    <article className="group">
      <div className="relative h-full overflow-hidden">
        <img
          src={img}
          alt={name}
          className="transition-all duration-[1.5s] group-hover:scale-125"
        />
        <div className="invisible absolute left-[50%] top-[50%] flex h-full w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center  bg-black/60 transition-all duration-200 group-hover:visible">
          <div className="flex scale-110 flex-col items-center justify-center gap-5 opacity-0  transition-transform duration-300 ease-linear  group-hover:scale-100 group-hover:opacity-100">
            <h3 className="text-[1.2rem] capitalize text-white">{title}</h3>
            <h1 className="text-[1.8rem] capitalize text-white ">{name}</h1>
            <Link
              to="/shop"
              className="bg-rose-700 p-3 text-[1.15rem] uppercase text-white transition-colors duration-300 hover:bg-yellow-500"
            >
              view all collections
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default SingleGallery;
