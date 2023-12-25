import useSWR, { SWRResponse } from "swr";
import { getPost } from "../api/getPost";
import { Post } from "..";
export const usePost = (
  slug: string | undefined
): SWRResponse<Post | undefined, any, any> => {
  const fetcher = async () => {
    const result = await getPost(slug);
    return result;
  };
  return useSWR(`/api/posts/post?slug=${slug}`, fetcher);
};
