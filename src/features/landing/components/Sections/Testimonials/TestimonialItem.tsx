import { Text, Title } from "@/components";
import { Testimonial } from "@/types";
import Rate from "./Rate";
import TestimonialIcon from "./TestimonialIcon";
import clsx from "clsx";

type TestimonialItem = {
  item: Testimonial;
  index: number;
};
const TestimonialItem = (props: TestimonialItem) => {
  const { item, index } = props;
  const classes = clsx(
    "px-8 py-6 md:py-2 w-full md:w-1/3 text-center",
    index === 1
      ? "border-y border-x-0 md:border-y-0 md:border-x border-slate-100"
      : ""
  );
  return (
    <div className={classes}>
      <div>
        {/* image */}
        <TestimonialIcon avatar={item.image} />
        <Title tag="p" className="font-bold">
          {item.name}
        </Title>
        <Text className="text-[#AEB3BC] my-2">{item.text}</Text>
        <Rate rate={item.rate} />
      </div>
    </div>
  );
};

export default TestimonialItem;
