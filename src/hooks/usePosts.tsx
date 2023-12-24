import { postList } from "@/api/postList";
import useSWR from "swr";
export const usePosts = () => {
  return useSWR("/api/users", postList);
};
