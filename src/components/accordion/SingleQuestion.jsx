import { useState } from "react";
import { useEffect, useRef } from "react";
import { BiDownArrowAlt } from "react-icons/bi";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const accordp = useRef(null);
  const accord = useRef(null);

  useEffect(() => {
    const infoHeight = accordp.current.clientHeight;
    if (showInfo) {
      accord.current.style.height = `${infoHeight}px`;
    } else {
      accord.current.style.height = 0;
    }
  }, [showInfo]);

  return (
    <article className="mb-7 w-[40rem] shadow-xl tablet:w-[30rem] mm:w-full">
      <h1
        className="flex cursor-pointer items-center justify-between bg-red-700 px-4 py-2  text-[1.7rem] capitalize  text-white tablet:text-lg"
        onClick={() => setShowInfo(!showInfo)}
      >
        {title}
        <BiDownArrowAlt
          className={`${
            showInfo ? "rotate-180" : ""
          } transition delay-200 duration-500`}
        />
      </h1>
      <div
        className="h-0 overflow-hidden transition-all duration-200"
        ref={accord}
      >
        <p className={`bg-white px-4 py-4`} ref={accordp}>
          {info}
        </p>
      </div>
    </article>
  );
};
export default SingleQuestion;
