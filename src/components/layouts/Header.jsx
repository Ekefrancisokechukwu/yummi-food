import HomeNav from "./HomeNav";
import logo from "../../assets/img/logo_3.avif";
import { BsPersonCircle } from "react-icons/bs";
import { TbShoppingBag } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";

const Header = () => {
  const { scroll, openSearchbar, setIsSidebarOpen } = useGlobalContext();
  const { setCartOpen, total_items, cart, wishlist_amount, wishlist } =
    useCartContext();

  return (
    <header
      className={`flex items-center justify-between px-20 py-5 transition-all duration-500 lg:px-10 lg:py-2 ${
        scroll === "down" ? "-top-20" : "sticky top-0 z-20 bg-gray-50/75"
      } `}
    >
      <div className="flex items-center gap-4">
        <RxHamburgerMenu
          className=" hidden cursor-pointer text-[1.6rem] lg:block"
          onClick={() => setIsSidebarOpen(true)}
        />
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <HomeNav />

      <div className="flex items-center gap-6 text-[1.7rem]">
        <button className=" mm:hidden">
          <BsPersonCircle className="cursor-pointer transition-all duration-300 hover:text-rose-600" />
        </button>
        <button className="relative" onClick={setCartOpen}>
          <TbShoppingBag className="cursor-pointer transition-all duration-300 hover:text-rose-600" />
          {cart.length > 0 && (
            <span className="absolute -right-2 -top-2 grid  h-5 w-5 place-items-center rounded-full border border-black text-sm">
              {total_items}
            </span>
          )}
        </button>
        <NavLink to="/wishlist" className="relative">
          <AiOutlineHeart className="cursor-pointer transition-all duration-300 hover:text-rose-600" />
          {wishlist.length > 0 && (
            <span className="absolute -right-2 -top-2 grid  h-4 w-4 place-items-center rounded-full border border-black text-xs">
              {wishlist_amount}
            </span>
          )}
        </NavLink>
        <CiSearch
          className="cursor-pointer transition-all duration-300 hover:text-rose-600"
          onClick={openSearchbar}
        />
      </div>
    </header>
  );
};
export default Header;
