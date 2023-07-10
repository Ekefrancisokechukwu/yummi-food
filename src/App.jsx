import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import { Home, Blog, About, Fqa, Contact, Error, Shop } from "./pages";
import Signin from "./account/Signin";
import SignUp from "./account/SignUp";
import SingleProduct from "./pages/SingleProduct";
import SharedProduct from "./pages/SharedProduct";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<Fqa />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/wishlist" element={<WishList />} />

            <Route path="/shop" element={<SharedProduct />}>
              <Route index element={<Shop />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>
            <Route path="account/login" element={<Signin />} />
            <Route path="account/register" element={<SignUp />} />
            <Route path="*" errorElement={<Error />} element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
