import { Container } from "..";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className=" bg-slate-700  p-8 mt-24">
      <Container>
        <Newsletter />
        <p className="text-slate-200 text-sm font-normal">
          All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
