import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppProvider from "./context/context.jsx";
import { HomeProdProvider } from "./context/home_prod-context.jsx";
import { FilterProvider } from "./context/filter_context.jsx";
import { StrictMode } from "react";
import { CartProvider } from "./context/cart_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <HomeProdProvider>
        <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
        </FilterProvider>
      </HomeProdProvider>
    </AppProvider>
  </StrictMode>
);
