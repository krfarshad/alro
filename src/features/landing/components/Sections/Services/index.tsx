import { Container, Row, Title } from "@/components";
import serviceBg from "../../../assets/services.jpg";
import ServiceItems from "./ServiceItems";

const Services = () => {
  return (
    <section
      className="pt-28 pb-4 mb-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <Title className="text-center text-white mb-2" tag="h2">
          Our Services
        </Title>
        <Title className="text-center text-white" tag="p">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </Title>
        <Row className="mt-4 -mb-20">
          <ServiceItems />
        </Row>
      </Container>
    </section>
  );
};

export default Services;
