import { useFilterContext } from "../context/filter_context";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import "swiper/swiper-bundle.css";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import SingleFood from "../products/SingleFood";
import { useState } from "react";

const Bestseller = () => {
  const { filtered_products } = useFilterContext();
  const [slideBtn, setSlideBtn] = useState(null);

  return (
    <div className="mt-8 w-[20rem] overflow-hidden xs:w-[15rem]">
      <Swiper slidesPerView={1} onSwiper={(swiper) => setSlideBtn(swiper)}>
        {filtered_products.slice(0, 3).map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <SingleFood {...product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mt-5 flex justify-center gap-4 text-white">
        <button
          className="bg-rose-700 p-2 text-xl transition duration-500 hover:bg-yellow-500"
          onClick={() => slideBtn.slidePrev()}
        >
          <FiChevronLeft />
        </button>
        <button
          className="bg-rose-700 p-2 text-xl transition duration-500 hover:bg-yellow-500"
          onClick={() => slideBtn.slideNext()}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Bestseller;
