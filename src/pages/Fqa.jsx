import { Link } from "react-router-dom";
import Questions from "../components/accordion/Questions";
import PageHero from "../components/PageHero";

/* eslint-disable react/no-unescaped-entities */
const Fqa = () => {
  return (
    <>
      <PageHero>
        <div className="">
          <h1 className="text-3xl text-white">Faq's</h1>

          <div className=" mt-3 text-white  ">
            <Link to="/" className="hover:text-yellow-600">
              Home
            </Link>{" "}
            / <span>Faq's</span>
          </div>
        </div>
      </PageHero>

      <div className="bg-gray-100 ">
        <Questions />
      </div>
    </>
  );
};
export default Fqa;
