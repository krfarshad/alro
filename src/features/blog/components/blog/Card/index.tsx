import { Text, Title } from "@/components";
import { Post } from "../../../types/index";
import Thumbnail from "./Thumbnail";
import { getExcerpt } from "@/utils/getExcerpt";
import { Link } from "react-router-dom";

type Props = {
  post: Post;
};
const Card = (props: Props) => {
  const { post } = props;
  const excerpt = getExcerpt(post.content, 40);

  return (
    <div className="p-2 w-full md:w-1/2 lg:w-1/3">
      <div className=" border-slate-200 border">
        <Thumbnail image={post.thumbnail} link={post.slug} />
        <div className="p-4">
          <Title tag="h3" className="my-2">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </Title>
          <Text>{excerpt}</Text>
        </div>
      </div>
    </div>
  );
};

export default Card;
