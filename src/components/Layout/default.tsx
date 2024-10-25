import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="py-2">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};
