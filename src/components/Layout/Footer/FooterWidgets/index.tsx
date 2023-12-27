import { Row } from "../..";
import FooterAbout from "./FooterAbout";
import FooterMenus from "./FooterMenus";

const FooterWidgets = () => {
  return (
    <Row className="px-2 py-2">
      <FooterMenus />
      <FooterAbout />
    </Row>
  );
};

export default FooterWidgets;
