import { Text } from "@/components";
import WidgetTitle from "./WidgetTitle";
import { Link } from "react-router-dom";

const FooterAbout = () => {
  return (
    <div className="w-full md:w-full lg:w-1/5 my-3">
      <WidgetTitle>
        <span className="text-primary text-md font-bold">ALRO </span>DESIGN
      </WidgetTitle>
      <div>
        <Text className="text-gray-300 mb-2">
          Iran ،Tehran ،Niavaran ،Alton Court
        </Text>
      </div>
      <div>
        <Text className="text-gray-300 mb-2">
          <Link to="tel:+989137120436">+98913-7120436</Link>
        </Text>
      </div>
      <div>
        <Text>
          <Link to="mailto:krfarshad@gmail.com" className="text-gray-300 mb-2">
            krfarshad@gmail.com
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default FooterAbout;
