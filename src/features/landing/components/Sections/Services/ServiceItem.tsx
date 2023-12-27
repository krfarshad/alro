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
    <div className=" w-full md:w-1/4 p-2 mt-4">
      <div
        className="bg-white transition-all hover:transition-all
       hover:bg-[#000000ef] rounded-md px-4 py-10 group shadow-md shadow-slate-200 hover:shadow-slate-800 hover:-translate-y-2"
      >
        <ServiceIcon icon={item.icon} />
        <Title
          className="text-center mt-4 group-hover:text-white transition-all group-hover:transition-all"
          tag="h5"
        >
          {item.title}
        </Title>
        <Text
          className="text-center py-2  group-hover:text-[#D0D4D9] transition-all group-hover:transition-all"
          tag="p"
        >
          {item.text}
        </Text>
        <div className="text-center mt-3">
          <Button
            type="primary"
            variant="outlined"
            size="small"
            className="border-primary hover:bg-primary hover:text-white"
          >
            <Link to={item.slug}>Read more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
