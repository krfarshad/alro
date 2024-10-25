import useSWR from "swr";
import { getPost } from "../api/getPost";

export const usePost = (slug: string | undefined) => {
  const fetcher = async () => {
    const result = await getPost(slug);
    return result;
  };
  return useSWR(`/api/posts/post?slug=${slug}`, fetcher);
};
