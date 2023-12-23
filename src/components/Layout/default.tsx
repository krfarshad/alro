import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Container } from ".";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="py-2">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
};
