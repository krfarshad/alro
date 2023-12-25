import { usePosts } from "../../hooks/usePosts";
import { Row, SpinnerLoading } from "@/components";
import Card from "./Card";
const PostItems = () => {
  const { data, isLoading, error } = usePosts();

  isLoading && <SpinnerLoading />;
  if (error) {
    throw new Error("Fetch Error Data");
  }

  return <Row>{data && data.map((post) => <Card post={post} />)}</Row>;
};

export default PostItems;
