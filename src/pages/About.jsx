import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import {
  BiLogoTwitter,
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <PageHero>
        <div className="">
          <h1 className="mb-4 text-3xl font-semibold tracking-wider">About</h1>
          <Link to="/" className="hover:text-yellow-500">
            Home{" "}
          </Link>{" "}
          / <span>About</span>
        </div>
      </PageHero>

      <div className="flex gap-4 px-[13rem] py-28 text-gray-800 xs:flex-col-reverse xs:px-12 mm:px-6">
        <div className="">
          <h1 className="text-3xl ">Healthy Oven French Dinner</h1>
          <p className="mt-6 tracking-wider">
            Massa placerat duis ultricies lacus sed. Sit amet nisl purus in
            mollis nunc sed id semper. Cras pulvinar mattis nunc sed. Lectus
            nulla at volutpat diam. Integer quis auctor elit sed vulputate mi
            sit amet. Ante in nibh mauris cursus. Ipsum dolor sit amet
            consectetur adipiscing elit.
          </p>
          <p className="mt-5 tracking-wider">
            Cras pulvinar mattis nunc sed. Lectus nulla at volutpat diam.
            Integer quis auctor elit sed vulputate mi sit amet. Ante in nibh
            mauris cursus. Ipsum dolor sit amet consectetur adipiscing
            elit.Egestas integer eget aliquet nibh praesent tristique magna.
            Faucibus nisl tincidunt eget nullam non nisi est sit amet.
          </p>
          <p className="mt-5 tracking-wider">
            Egestas integer eget aliquet nibh praesent tristique magna. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet. Vitae sapien
            pellentesque habitant morbi tristique senectus et netus.
          </p>
        </div>
        <img
          className="w-[33rem]"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/abo-01.jpg?v=1627997034&width=1500"
          alt=""
        />
      </div>

      <div className="px-24 py-16 mm:px-6">
        <h1 className="mb-14 text-center text-3xl font-semibold tablet:text-2xl">
          We Offer Tasty & Delicious Food In Healthy Way
        </h1>

        <div className="food mx-auto grid w-[80%] gap-6  tablet:w-full">
          <article className="group relative h-[32rem] overflow-hidden mm:h-auto">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/4.jpg?v=1614335086&width=1500"
              alt=""
              className="transition-transform duration-1000 group-hover:scale-150"
            />
            <div className="invisible absolute left-0 top-0 grid h-full w-full place-items-center bg-black/50 p-8 text-center text-white  opacity-0 group-hover:visible group-hover:opacity-100">
              <div className="">
                <h2 className="relative  mb-5 text-xl before:absolute before:-bottom-2 before:h-1 before:w-20  before:bg-white">
                  Fiambre
                </h2>
                <p>
                  Enim nec dui nunc mattis. Porttitor lacus luctus accumsan
                  tortor posuere. Auctor eu augue ut lectus arcu bibendum
                  vulputate.
                </p>
              </div>
            </div>
          </article>
          <article className="group relative h-[32rem] overflow-hidden mm:h-auto">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/3.jpg?v=1614335086&width=1500"
              alt=""
              className="transition-transform duration-1000 group-hover:scale-150"
            />
            <div className="invisible absolute left-0 top-0 grid h-full w-full place-items-center bg-black/50  p-8 text-center text-white opacity-0 group-hover:visible group-hover:opacity-100">
              <div className="">
                <h2 className="relative  mb-5 text-xl before:absolute before:-bottom-2 before:h-1 before:w-20  before:bg-white">
                  Thai Prawn Rice
                </h2>
                <p>
                  Malesuada fames ac turpis egestas integer eget. Cursus risus
                  at ultrices mi tempus imperdiet nulla malesuada. Ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
            </div>
          </article>
          <article className="group relative h-[32rem] overflow-hidden mm:h-auto ">
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/2.jpg?v=1614335086&width=1500"
              alt=""
              className="transition-transform duration-1000 group-hover:scale-150"
            />
            <div className="p -8 invisible absolute left-0 top-0 grid h-full w-full place-items-center bg-black/50 text-center text-white opacity-0 group-hover:visible group-hover:opacity-100">
              <div className="">
                <h2 className="relative mb-5 cursor-pointer text-xl before:absolute before:-bottom-2 before:h-1 before:w-20  before:bg-white">
                  Pane Carasau
                </h2>
                <p>
                  Sed blandit libero volutpat sed cras ornare arcu dui. Neque
                  egestas congue quisque egestas diam. Viverra justo nec
                  ultrices dui sapien.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="py-20">
        <h1 className="text-semibold mb-6 text-center text-3xl">Our Staff</h1>
        <div className="staff mx-auto grid w-[65rem] gap-5 tablet:w-full">
          <article
            className="group relative  overflow-hidden after:absolute after:top-0 after:h-full after:w-full after:scale-0 after:bg-rose-500/40 after:opacity-0  after:transition 
          after:duration-500
          hover:after:scale-100
          hover:after:opacity-100
          "
          >
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/team-01_54b37f7a-db5f-4588-9f4e-b11a8954b625.jpg?v=1627997310&width=1500"
              alt=""
            />

            <motion.div className="absolute bottom-4 left-[25%] z-10 flex translate-y-14 gap-3 text-2xl text-white transition duration-500 group-hover:translate-y-0">
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoTwitter />
              </span>
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoFacebookSquare />
              </span>
              <span className="cursor-pointer bg-rose-600  p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoInstagramAlt />
              </span>
            </motion.div>
          </article>
          <article
            className="group relative  overflow-hidden after:absolute after:top-0 after:h-full after:w-full after:scale-0 after:bg-rose-500/40 after:opacity-0  after:transition 
          after:duration-500
          hover:after:scale-100
          hover:after:opacity-100
          "
          >
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/team-02.jpg?v=1627997331&width=1500"
              alt=""
            />

            <motion.div className="absolute bottom-4 left-[25%] z-10 flex translate-y-14 gap-3 text-2xl text-white transition duration-500 group-hover:translate-y-0">
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoTwitter />
              </span>
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoFacebookSquare />
              </span>
              <span className="cursor-pointer bg-rose-600  p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoInstagramAlt />
              </span>
            </motion.div>
          </article>
          <article
            className="group relative  overflow-hidden after:absolute after:top-0 after:h-full after:w-full after:scale-0 after:bg-rose-500/40 after:opacity-0  after:transition 
          after:duration-500
          hover:after:scale-100
          hover:after:opacity-100
          "
          >
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/team-03.jpg?v=1627997364&width=1500"
              alt=""
            />

            <motion.div className="absolute bottom-4 left-[25%] z-10 flex translate-y-14 gap-3 text-2xl text-white transition duration-500 group-hover:translate-y-0">
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoTwitter />
              </span>
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoFacebookSquare />
              </span>
              <span className="cursor-pointer bg-rose-600  p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoInstagramAlt />
              </span>
            </motion.div>
          </article>
          <article
            className="group relative  overflow-hidden after:absolute after:top-0 after:h-full after:w-full after:scale-0 after:bg-rose-500/40 after:opacity-0  after:transition 
          after:duration-500
          hover:after:scale-100
          hover:after:opacity-100
          "
          >
            <img
              src="https://yummi-theme.myshopify.com/cdn/shop/files/team-04.jpg?v=1627997400&width=1500"
              alt=""
            />

            <motion.div className="absolute bottom-4 left-[25%] z-10 flex translate-y-14 gap-3 text-2xl text-white transition duration-500 group-hover:translate-y-0">
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoTwitter />
              </span>
              <span className="cursor-pointer bg-rose-600 p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoFacebookSquare />
              </span>
              <span className="cursor-pointer bg-rose-600  p-2 transition-colors duration-500 hover:bg-yellow-500">
                <BiLogoInstagramAlt />
              </span>
            </motion.div>
          </article>
        </div>
      </div>
    </>
  );
};
export default About;
