import { NavLink } from "react-router-dom";

const SingleSidebarmenu = ({ head, links }) => {
  return (
    <div
    // className={`fixed top-12 h-full w-full  overflow-y-scroll bg-white   transition-all duration-150 ${
    //   openSidebarMenu ? "translate-x-0" : "translate-x-full"
    // }`}
    >
      <div className="">
        <h1 className="text-xl text-black underline underline-offset-4 ">
          {" "}
          {head}{" "}
        </h1>

        <ul>
          {links.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <NavLink> {item.link}</NavLink>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SingleSidebarmenu;
