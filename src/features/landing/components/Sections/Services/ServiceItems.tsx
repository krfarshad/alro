import { ourServices } from "../../../utils/services";
import ServiceItem from "./ServiceItem";

const ServiceItems = () => {
  const serviceItems = ourServices;
  return (
    <>
      {serviceItems.map((service) => (
        <ServiceItem key={service.id} item={service} />
      ))}
    </>
  );
};

export default ServiceItems;
