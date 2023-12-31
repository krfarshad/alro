import { Logo, Container, Row } from "@/components";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const classes = clsx("p-4 relative z-30", isHome ? "" : " bg-[#3F4348]");

  return (
    <header className={classes}>
      <Container>
        <Row className="justify-between items-center">
          <Logo />
          <Navigation />
        </Row>
      </Container>
    </header>
  );
};

export default Header;
