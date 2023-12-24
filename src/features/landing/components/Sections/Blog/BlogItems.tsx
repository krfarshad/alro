import { SpinnerLoading } from "@/components";
import { usePosts } from "@/hooks/usePosts";
import BlogItem from "./BlogItem";

const BlogItems = () => {
  const { data, isLoading, error } = usePosts();

  isLoading && <SpinnerLoading />;
  if (error) {
    throw new Error("Fetch Error Data");
  }
  return (
    <>{data && data.map((item) => <BlogItem key={item.id} item={item} />)}</>
  );
};

export default BlogItems;
