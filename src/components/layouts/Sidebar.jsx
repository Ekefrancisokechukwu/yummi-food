import { ImCancelCircle } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";
import { sidebarData } from "./nav/SidebarData";
import Sidebarlink from "./nav/Sidebarlink";
import { useGlobalContext } from "../../context/context";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-30 ${
          isSidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className="fixed left-0 top-0 z-30 hidden h-screen w-screen bg-rose-300/30 brightness-50 lg:block "
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        <aside
          className={`fixed  left-0 top-0 z-40 hidden h-screen w-[25rem] overflow-x-hidden overflow-y-scroll  bg-white transition-all  duration-500  lg:block mm:w-full ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ImCancelCircle
            className="m-2 text-3xl"
            onClick={() => setIsSidebarOpen(false)}
          />

          <nav className="mt-14" onClick={() => setIsSidebarOpen(false)}>
            <ul>
              <li className=" m-2 text-lg capitalize text-gray-500 ">
                <NavLink
                  to="/"
                  className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-gray-400/20"
                >
                  home
                </NavLink>
              </li>
              {sidebarData.map((data, index) => {
                return <Sidebarlink key={index} {...data} />;
              })}
              <li
                className=" m-2 text-lg capitalize text-gray-500 "
                onClick={() => setIsSidebarOpen(false)}
              >
                <NavLink
                  to="/shop"
                  className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-gray-400/20"
                >
                  shop
                </NavLink>
              </li>
              <li className=" m-2 text-lg capitalize text-gray-500 ">
                <NavLink
                  to="/faq"
                  className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-gray-400/20"
                >
                  fqa
                </NavLink>
              </li>
              <li className=" m-2 text-lg capitalize text-gray-500 ">
                <NavLink
                  to="/about"
                  className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-gray-400/20"
                >
                  about
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mt-[11rem] bg-gray-400/20 p-4">
            <div>
              <Link className="group flex items-center gap-3 text-[.8rem] capitalize text-gray-500 hover:text-rose-600">
                <BsPersonCircle className="text-[1.4rem] group-hover:scale-110" />
                log in
              </Link>
            </div>

            <div className="mt-[2.5rem] flex gap-5 text-rose-600">
              <a href="#">
                {" "}
                <FaTwitter />
              </a>
              <a href="#">
                {" "}
                <FaFacebookSquare />
              </a>
              <a href="#">
                {" "}
                <FaInstagram />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
export default Sidebar;
