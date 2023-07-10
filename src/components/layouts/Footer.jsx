import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";

const Footer = () => {
  const [scrollTop, setScrollTop] = useState();

  const scrollToTop = () => {
    scrollTo(0, 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 810) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <footer className="">
      <button
        className={`group fixed bottom-5 right-4 z-10 overflow-hidden  bg-rose-700 p-[.6rem] px-3 text-center text-white transition-all  duration-700 hover:scale-105 hover:bg-gray-800 ${
          scrollTop ? "translate-y-0" : "translate-y-48"
        }`}
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp className="inline-block text-xl transition-all duration-300 group-hover:-translate-y-48" />
        <h4 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-48 text-[.6rem] transition-all duration-500 group-hover:translate-y-[-50%]">
          <span className="block">Back</span> <span className="block">To</span>{" "}
          Top
        </h4>
      </button>
    </footer>
  );
};
export default Footer;
