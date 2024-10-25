import useSWR from "swr";
import { getProject } from "../api/getProject";

export const useProject = (slug: string | undefined) => {
  const fetcher = async () => {
    const result = await getProject(slug);
    return result;
  };
  return useSWR(`/api/posts/post?slug=${slug}`, fetcher);
};
