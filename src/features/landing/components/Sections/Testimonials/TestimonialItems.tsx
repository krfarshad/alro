import { SpinnerLoading } from "@/components";
import { useTestimonials } from "@/hooks/useTestimonials";
import TestimonialItem from "./TestimonialItem";

const TestimonialItems = () => {
  const { data, isLoading, error } = useTestimonials();

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (error) {
    throw new Error("Fetch Error Data");
  }
  return (
    <>
      {data &&
        data.map((item, index) => (
          <TestimonialItem key={item.id} index={index} item={item} />
        ))}
    </>
  );
};

export default TestimonialItems;
