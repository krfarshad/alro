import useSWR, { SWRResponse } from "swr";
import { getProject } from "../api/getProject";
import { ProjectItem } from "..";
export const useProject = (
  slug: string | undefined
): SWRResponse<ProjectItem | undefined, any, any> => {
  const fetcher = async () => {
    const result = await getProject(slug);
    return result;
  };
  return useSWR(`/api/posts/post?slug=${slug}`, fetcher);
};
