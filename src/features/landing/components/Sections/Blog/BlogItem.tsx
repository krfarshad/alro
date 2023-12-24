import { Button, Title } from "@/components";
import { Post } from "@/types";

type BlogItemProps = {
  item: Post;
};
const BlogItem = (props: BlogItemProps) => {
  const { item } = props;
  return (
    <div className="p-2">
      <div className="p-4 bg-4 bg-white rounded-sm">
        <Title>{item.title}</Title>
        <Button type="primary">Read more</Button>
      </div>
    </div>
  );
};

export default BlogItem;
