import { testimonialList } from "@/api/testimonialList";
import useSWR from "swr";
export const useTestimonials = () => {
  return useSWR("/api/users", testimonialList);
};
