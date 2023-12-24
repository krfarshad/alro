import { SpinnerLoading } from "@/components";
import { useTestimonials } from "@/hooks/useTestimonials";
import TestimonialItem from "./TestimonialItem";

const TestimonialItems = () => {
  const { data, isLoading, error } = useTestimonials();
  isLoading && <SpinnerLoading />;
  if (error) {
    throw new Error("Fetch Error Data");
  }
  return (
    <>
      {data &&
        data.map((item) => <TestimonialItem key={item.id} item={item} />)}
    </>
  );
};

export default TestimonialItems;
