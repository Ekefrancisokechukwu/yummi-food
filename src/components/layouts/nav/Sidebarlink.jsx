import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../../context/context";
import SingleSidebarmenu from "./SingleSidebarmenu";

const Sidebarlink = ({ label, icon, submenu }) => {
  const { openSidebarMenu, sidebarMenuOpen } = useGlobalContext();

  return (
    <>
      <li
        className=" m-2 text-lg capitalize text-gray-500 "
        onClick={sidebarMenuOpen}
      >
        <NavLink className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-gray-400/20">
          {label}
          {icon}
        </NavLink>

        {openSidebarMenu &&
          submenu.map((item, index) => {
            return <SingleSidebarmenu key={index} {...item} />;
          })}
      </li>
      
    </>
  );
};

export default Sidebarlink;

// const Sidebarlink = ({ title, icon, url, submenu }) => {
//   const { openSidebarMenu, sidebarMenuOpen } = useGlobalContext();
//   return (
//     <li
//       className=" m-2 text-lg capitalize text-gray-500 "
//       onClick={sidebarMenuOpen}
//     >
//       <NavLink
//         to={url}
//         className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-gray-400/20"
//       >
//         <span>{title}</span>
//         {icon}
//       </NavLink>

//       {submenu && (
//         <div
//           className={`fixed top-12 h-full w-full  overflow-y-scroll bg-white   transition-all duration-150 ${
//             openSidebarMenu ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {submenu.map((item, index) => {
//             return (
//               <div key={index} className="">
//                 <h1 className="text-xl text-black underline underline-offset-4 ">
//                   {" "}
//                   {item.label}{" "}
//                 </h1>
//                 <ul>
//                   {item.links.map((item, index) => {
//                     return (
//                       <li key={index}>
//                         {" "}
//                         <Link> {item.link}</Link>{" "}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </li>
//   );
// };
// export default Sidebarlink;
