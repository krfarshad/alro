import { Container, Row, Text, Title } from "@/components";
import BlogItems from "./BlogItems";

const Blog = () => {
  return (
    <section className="blog py-10">
      <Container>
        <Title tag="h2" className="mb-4 text-center">
          Updated Blogs
        </Title>
        <Text className="-mb-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Text>
        <Row>
          <BlogItems />
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
