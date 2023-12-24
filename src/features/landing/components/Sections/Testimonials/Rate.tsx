import { Testimonial } from "@/types";
import { Star1 } from "iconsax-react";
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
            <Star1
              className="inline-block mx-[2px]"
              key={`star_${index}`}
              size="16"
              variant="Linear"
              color={color}
            />
          );
        })}
    </>
  );
};

export default Rate;
