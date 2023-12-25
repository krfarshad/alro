import { Container, SpinnerLoading, Text, Title } from "@/components";
import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import Thumbnail from "../blog/Card/Thumbnail";

const SingleBlog = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = usePost(slug);

  isLoading && <SpinnerLoading />;
  if (error) {
    throw new Error("Fetch Error Data");
  }
  return (
    <Container className="my-4">
      {data && (
        <>
          <Title className="mb-8">{data.title}</Title>
          <Thumbnail
            className="min-h-[300px] max-h-[400px] mx-auto w-auto"
            image={data.thumbnail}
          />
          <Text className="mt-8">{data.content}</Text>
        </>
      )}
    </Container>
  );
};

export default SingleBlog;
