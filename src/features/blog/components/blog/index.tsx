import { Container, Title } from "@/components";
import PostItems from "./PostItems";

const BlogArchive = () => {
  return (
    <Container>
      <Title tag="h1" className="text-center my-2">
        Blog
      </Title>
      <PostItems />
    </Container>
  );
};

export default BlogArchive;
