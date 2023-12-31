import { Testimonial } from "@/types";
import { Star } from "iconsax-react";
type RateProps = Pick<Testimonial, "rate">;
const Rate = (props: RateProps) => {
  const { rate } = props;
  return (
    <>
      {Array(5)
        .fill(1)
        .map((_, index: number) => {
          const color = rate > index ? "#FFB801" : "#3333";
          return (
            <Star
              className="inline-block"
              key={`star_${index}`}
              size="18"
              variant="Bold"
              color={color}
            />
          );
        })}
    </>
  );
};

export default Rate;
