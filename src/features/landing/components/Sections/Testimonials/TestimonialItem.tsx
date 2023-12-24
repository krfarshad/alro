import { Text, Title } from "@/components";
import { Testimonial } from "@/types";
import Rate from "./Rate";

type TestimonialItem = {
  item: Testimonial;
};
const TestimonialItem = (props: TestimonialItem) => {
  const { item } = props;
  return (
    <div className="p-2 w-full md:w-1/3 text-center">
      <div>
        {/* image */}
        <Title>{item.name}</Title>
        <Text>{item.text}</Text>
        <Rate rate={item.rate} />
      </div>
    </div>
  );
};

export default TestimonialItem;
