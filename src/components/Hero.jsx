import img1 from "../assets/img/slide1-bg.webp";
import img2 from "../assets/img/slide2-bg.webp";
import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-[100%]">
      <div className="relative h-[45rem] w-[10rem] cursor-grab">
        <img src={img1} alt="discount img" />
        <div className="absolute left-40 top-44 w-[40%] tablet:left-[50%] tablet:top-[50%]  tablet:w-[80%]  tablet:translate-x-[-50%] tablet:translate-y-[-50%] tablet:text-center">
          <h3 className="text-[1.2rem] capitalize text-white">
            mega discount on
          </h3>
          <h1 className="mt-4 text-[3.5rem] font-bold capitalize leading-normal text-yellow-500 sm:text-3xl">
            tasty bites heathy foods
          </h1>
          <h5 className="mt-3 text-4xl text-white">10 - 50% OFF</h5>
          <button className="mt-5 bg-white p-3 text-[1rem] uppercase text-gray-600 transition-colors hover:bg-red-700 hover:text-white">
            view dishes
          </button>
        </div>
      </div>

      <div className="relative h-[45rem] w-[100%] cursor-grab">
        <img src={img2} alt="discount img" />
        <div className="absolute  left-[50%] top-[50%] w-[40%] translate-x-[-50%] translate-y-[-50%] text-center tablet:w-[80%]">
          <h3 className="text-[1.2rem] capitalize text-white">
            home made dish on your doorstep
          </h3>
          <h1 className="mt-4 text-[3.5rem] font-bold capitalize leading-normal text-yellow-500 sm:text-3xl">
            {" "}
            great dish @ great price
          </h1>
          <h5 className="mt-3 text-4xl text-white">10 - 50% OFF</h5>
          <button className="mt-5 bg-white p-3 text-[1rem] text-xl uppercase text-gray-600 transition-colors hover:bg-red-700 hover:text-white">
            view dishes
          </button>
        </div>
      </div>
    </Slider>
  );
};
export default Hero;

{
  /* <div className="relative w-[100%]">
  <img src={img1} alt="discount img" />
  <div className="absolute left-40 top-44 w-[40%]">
    <h3 className="text-[1.2rem] capitalize text-white">
      mega discount on
    </h3>
    <h1 className="mt-4 text-[3.5rem] font-bold capitalize leading-normal text-yellow-500">
      tasty bites heathy foods
    </h1>
    <h5 className="mt-3 text-4xl text-white">10 - 50% OFF</h5>
    <button className="mt-5 bg-white p-3 text-xl text-gray-600">
      view dishes
    </button>
  </div>
</div> */
}
