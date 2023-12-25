import Thumbnail from "./Thumbnail";
import Overlay from "./Overlay";
import { Post } from "@/features/blog";

export type BlogItemProps = {
  item: Post;
};
const BlogCard = (props: BlogItemProps) => {
  const { item } = props;

  return (
    <div className="py-10 mb-2">
      <div className="relative flex items-end p-4 bg-4 bg-white rounded-sm h-56">
        <div className="container rounded-sm overflow-hidden absolute left-0 top-0 w-full h-full">
          <Thumbnail image={item.thumbnail} />
        </div>
        <div className="overlay shadow-md shadow-slate-200 rounded-sm relative z-20 bg-white p-4 mx-auto -mb-20">
          <Overlay item={item} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
