import { ArrowRight } from "iconsax-react";
import { Button, Row, Text, Title } from "@/components";
import { BlogItemProps } from ".";
import { Link } from "react-router-dom";

const Overlay = (props: BlogItemProps) => {
  const { item } = props;
  const words = item.content?.split(" ");
  const excerpt = words.slice(0, 15).join(" ");

  return (
    <>
      <Title tag="h6" className="!font-bold">
        <Link to={`/blog/${item.slug}`}>{item.title}</Link>
      </Title>
      <Text className="text-sm my-1">{`${excerpt} ...`}</Text>
      <Row className="overlay-footer !flex-nowrap justify-between items-center">
        <div className="date">
          <Text tag="span" className="!text-xs text-gray-400">
            {item.publishDate}
          </Text>
        </div>
        <div className="more">
          <Button type="primary" className="!text-sm ">
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
