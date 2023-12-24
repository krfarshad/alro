import { Container, Row } from "@/components";
import TestimonialItems from "./TestimonialItems";

const Testimonials = () => {
  return (
    <section className="testimonials py-20">
      <Container>
        <Row>
          <TestimonialItems />
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
