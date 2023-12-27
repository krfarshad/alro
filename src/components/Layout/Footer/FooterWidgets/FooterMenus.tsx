import { footerRoutes } from "@/router/footerRoutes";
import WidgetTitle from "./WidgetTitle";
import { Link } from "react-router-dom";
import { Row } from "../..";

const FooterMenus = () => {
  return (
    <div className="w-full md:w-full lg:w-4/5 my-3">
      <Row>
        {footerRoutes.map((footerWidget) => (
          <div
            key={footerWidget.title}
            className="w-1/2 md:w-1/2 lg:w-1/4 mb-4"
          >
            <WidgetTitle>{footerWidget.title}</WidgetTitle>
            <ul className="pl-1">
              {footerWidget.routes.map((route) => (
                <li key={route.text}>
                  <Link
                    to={route.link}
                    target={route.target}
                    className="text-gray-200 text-sm block transition-all hover:transition-all py-[6px] font-light hover:text-primary"
                  >
                    {route.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default FooterMenus;
