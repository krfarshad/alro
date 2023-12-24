import { Button, Title } from "@/components";
import { Service } from "../../../types/type";
import { Link } from "react-router-dom";

type ServiceItemProp = {
  item: Service;
};
const ServiceItem = (props: ServiceItemProp) => {
  const { item } = props;
  return (
    <div className=" w-full md:w-1/4 p-2">
      <div className="bg-white rounded-sm p-4">
        {/* icon */}

        <Title className="text-center mt-4" tag="h3">
          {item.title}
        </Title>
        <Title className="text-center" tag="h6">
          {item.text}
        </Title>
        <div className="text-center">
          <Button type="primary">
            <Link to={item.slug}>Read more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
