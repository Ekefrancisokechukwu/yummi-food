/* eslint-disable react/jsx-key */
import { Link, NavLink } from "react-router-dom";

const SingleLink = ({ title, icon, url, submenu, img, pages }) => {
  return (
    <div className="label-dropdown group: group relative">
      <li className="">
        <NavLink
          to={url}
          className={({ IsActive }) =>
            IsActive
              ? "nav-link active flex items-center text-rose-700"
              : "nav-link flex items-center gap-1"
          }
        >
          {title} {icon}
        </NavLink>
      </li>

      {submenu && (
        <div className="drop-down absolute left-[50%]  top-[2rem] z-20 w-max bg-white p-[1rem] px-[2rem]  transition-all delay-300 duration-300 hover:visible  group-hover:visible ">
          <div className="flex  gap-[7rem]">
            {submenu.map((sub, index) => {
              const { label, links } = sub;
              return (
                <div className="mt-3" key={index}>
                  <h1 className="text-xl capitalize text-gray-900 underline underline-offset-4">
                    {label}
                  </h1>
                  <ul className="mt-[1rem]">
                    {links.map((link, index) => {
                      return (
                        <li
                          key={index}
                          className="pt-2 capitalize transition duration-200 hover:text-rose-700"
                        >
                          <Link to={link.url}> {link.link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {img && (
              <div className="w-[20rem]">
                <img src={img} alt="" />
              </div>
            )}
          </div>
        </div>
      )}

      {pages && (
        <div className="drop-down absolute left-[50%] top-[2rem] z-20 w-max  bg-white transition-all delay-300 duration-300    hover:visible  group-hover:visible">
          <ul>
            {pages.map((pageLink, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer border-b border-black/30 p-2 capitalize hover:text-rose-700"
                >
                  <Link to={pageLink.url} className="p-2 px-16">
                    {pageLink.page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default SingleLink;
