import { ArrowRight } from "iconsax-react";
import { Button, Row, Text, Title } from "@/components";
import { BlogItemProps } from ".";
import { Link } from "react-router-dom";
import { getExcerpt } from "@/utils/getExcerpt";

const Overlay = (props: BlogItemProps) => {
  const { item } = props;
  const excerpt = getExcerpt(item.content, 15);
  return (
    <>
      <Title tag="h6" className="!font-bold">
        <Link to={`/blog/${item.slug}`}>{item.title}</Link>
      </Title>
      <Text className="text-sm my-1">{`${excerpt} ...`}</Text>
      <Row className="overlay-footer mt-4 !flex-nowrap justify-between items-center">
        <div className="date">
          <Text tag="span" className="!text-xs text-gray-400">
            {item.publishDate}
          </Text>
        </div>
        <div className="more">
          <Button
            type="primary"
            className="!text-sm border border-transparent group-hover:border-primary group-hover:border"
          >
            <Link className="flex justify-center" to={`/blog/${item.slug}`}>
              Read more
              <ArrowRight size="20" className="text-primary ml-1" />
            </Link>
          </Button>
        </div>
      </Row>
    </>
  );
};

export default Overlay;
