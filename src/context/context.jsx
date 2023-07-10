import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [scroll, setScroll] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  // useEffect(() => {
  //   if (category === "breakfast") {
  //     const breakfast = HomefoodData.filter(
  //       (item) => item.category === "breakfast"
  //     );

  //     setFoodItems(breakfast);
  //     return;
  //   }

  //   const newFood = HomefoodData.filter((item) => item.category === category);
  //   setFoodItems(newFood);
  // }, [category]);

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const UpdateScroll = () => {
      const currentScroll = window.pageYOffset;
      const direction = currentScroll > lastScroll ? "down" : "up";
      if (
        direction !== scroll &&
        (currentScroll - lastScroll > 5 || currentScroll - lastScroll < -5)
      ) {
        setScroll(direction);
      }
      lastScroll = currentScroll > 0 ? currentScroll : 0;
    };

    window.addEventListener("scroll", UpdateScroll);
    return () => window.removeEventListener("scroll", UpdateScroll);
  }, [scroll]);

  const openSearchbar = () => {
    document.body.style.overflow = "hidden";
    setIsSearchVisible(true);
  };

  const closeSearchbar = () => {
    document.body.style.overflow = "";
    setIsSearchVisible(false);
  };

  return (
    <AppContext.Provider
      value={{
        scroll,
        closeSearchbar,
        openSearchbar,
        isSearchVisible,
        setIsSidebarOpen,
        isSidebarOpen,
        openSidebarMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
