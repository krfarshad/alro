import { Logo, Container, Row } from "@/components";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="p-4 border-b border-slate-200 bg-slate-100">
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
