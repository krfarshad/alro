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
    "px-8 py-6 md:py-4 w-full md:w-1/3 text-center group hover:bg-slate-50 transition-all hover:transition-all border-transparent border hover:border hover:border-slate-200",
    index === 1
      ? "border-x-0 md:border-x !border-y-transparent hover:!border-y-slate-200  md:border-slate-200 "
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
