import { Outlet } from "react-router-dom";
import Miniheader from "../components/layouts/Miniheader";
import Header from "../components/layouts/Header";
import Search from "../components/Search";
import Sidebar from "../components/layouts/Sidebar";
import Footer from "../components/layouts/Footer";
import HomeProducts from "../components/HomeProducts";
import AsideCart from "../components/AsideCart";

const SharedLayout = () => {
  return (
    <>
      <AsideCart />
      <HomeProducts />
      <Miniheader />
      <Search />
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
