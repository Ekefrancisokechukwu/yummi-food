import { useState } from "react";
import ico1 from "../assets/img/count1.webp";
import ico2 from "../assets/img/count2.webp";
import ico3 from "../assets/img/count3.webp";
import ico4 from "../assets/img/count4.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const HomeCount = () => {
  const [isCounterOn, setIsCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setIsCounterOn(true)}
      onExit={() => setIsCounterOn(false)}
    >
      <section className="flex justify-between gap-3 px-48 py-16 text-center text-gray-700 xs:px-10 sm:flex-wrap">
        <div className="">
          <img
            src={ico1}
            alt="img"
            className="mx-auto h-16 w-16 xs:h-12 xs:w-12"
          />

          <h1 className="my-3 text-xl font-semibold xs:text-lg">Menu Types</h1>
          {isCounterOn && (
            <CountUp
              start={100}
              end={200}
              duration={3}
              className="text-3xl font-semibold text-rose-700"
            />
          )}
        </div>

        <div className="">
          <img
            src={ico2}
            alt="img"
            className="mx-auto h-16 w-16 xs:h-12 xs:w-12"
          />

          <h1 className="my-3 text-xl font-semibold xs:text-lg">
            Different Origin
          </h1>
          {isCounterOn && (
            <CountUp
              start={0}
              end={50}
              duration={3}
              className="text-3xl font-semibold text-rose-700"
            />
          )}
        </div>

        <div className="">
          <img
            src={ico3}
            alt="img"
            className="mx-auto h-16 w-16 xs:h-12 xs:w-12"
          />

          <h1 className="my-3 text-xl font-semibold xs:text-lg">
            Pasta & Noodles
          </h1>
          {isCounterOn && (
            <CountUp
              start={500}
              end={850}
              duration={3}
              className="text-3xl font-semibold text-rose-700 "
            />
          )}
        </div>

        <div className="">
          <img
            src={ico4}
            alt="img"
            className="mx-auto h-16 w-16 xs:h-12 xs:w-12"
          />

          <h1 className="my-3 text-xl font-semibold  xs:text-lg">
            Meals To Go
          </h1>

          {isCounterOn && (
            <CountUp
              start={400}
              end={500}
              duration={3}
              className="text-3xl font-semibold text-rose-700"
            />
          )}
        </div>
      </section>
    </ScrollTrigger>
  );
};
export default HomeCount;
