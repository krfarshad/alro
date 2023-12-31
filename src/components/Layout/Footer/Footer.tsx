import { Container } from "..";
import Copyright from "./Copyright";
import FooterWidgets from "./FooterWidgets";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer
      className="p-8 mt-24"
      style={{
        background: "linear-gradient(180deg, #3F4348 0%, #0C0C0C 100%)",
      }}
    >
      <Container>
        <Newsletter />
        <FooterWidgets />
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
