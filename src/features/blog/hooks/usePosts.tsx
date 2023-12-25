import useSWR from "swr";
import { postList } from "../api/postList";
export const usePosts = () => {
  return useSWR("/api/posts", postList);
};
