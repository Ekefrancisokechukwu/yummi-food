// import { useGlobalContext } from "../components/context";
import Filter from "./Filter";
import SingleFood from "./SingleFood";
import { Navigation, Scrollbar, A11y } from "swiper";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import { useHomeProd } from "../context/home_prod-context";

const FoodContainer = () => {
  const [slideBtn, setSlideBtn] = useState(null);
  const { homeFood } = useHomeProd();

  return (
    <div className="mx-auto my-16 max-w-[67rem]   overflow-hidden px-6">
      <Filter slideBtn={slideBtn} />

      <div className="mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            900: {
              slidesPerView: 3,
              spaceBetween: 15,
            },

            569: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          // onReachEnd={() => console.log("hello")}
          onSwiper={(swiper) => setSlideBtn(swiper)}
          onSlideChange={() => console.log("slide change")}
          modules={[Navigation, Scrollbar, A11y]}
        >
          {homeFood.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <SingleFood {...product} product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default FoodContainer;
