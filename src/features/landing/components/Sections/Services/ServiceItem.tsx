import { Button, Text, Title } from "@/components";
import { Service } from "../../../types";
import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon";

type ServiceItemProp = {
  item: Service;
};
const ServiceItem = (props: ServiceItemProp) => {
  const { item } = props;
  return (
    <div className=" w-full md:w-1/4 p-2 ">
      <div className="bg-white rounded-md p-4 shadow-md shadow-slate-100">
        <ServiceIcon icon={item.icon} />
        <Title className="text-center mt-4" tag="h3">
          {item.title}
        </Title>
        <Text className="text-center py-2" tag="p">
          {item.text}
        </Text>
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
