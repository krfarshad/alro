import { ourServices } from "../../../utils/services";
import ServiceItem from "./ServiceItem";

const ServiceItems = () => {
  const serviceItems = ourServices;
  return (
    <>
      {serviceItems.map((service) => (
        <ServiceItem item={service} />
      ))}
    </>
  );
};

export default ServiceItems;
