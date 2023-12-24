import { Container, Row } from "@/components";
import BlogItems from "./BlogItems";

const Blog = () => {
  return (
    <section className="blog p-20">
      <Container>
        <Row>
          <BlogItems />
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
