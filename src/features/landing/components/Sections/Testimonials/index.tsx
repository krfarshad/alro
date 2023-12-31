import { Container, Row, Text, Title } from "@/components";
import TestimonialItems from "./TestimonialItems";

const Testimonials = () => {
  return (
    <section className="testimonials py-10">
      <Container>
        <Title className="text-center mb-2" tag="h2">
          Opinions Of Our Customers
        </Title>
        <Text className="text-center mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <Row className="py-10">
          <TestimonialItems />
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
