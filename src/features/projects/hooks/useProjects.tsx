import { projectList } from "@/features/projects/api/projectList";
import useSWR, { SWRResponse } from "swr";
import { ProjectFilter, ProjectItem } from "..";
type Props = {
  filters?: ProjectFilter | null;
};
export const useProjects = (
  props: Props
): SWRResponse<ProjectItem[] | null, any, any> => {
  const { filters } = props;
  const key = filters ? ["/api/projects", filters] : "/api/projects";
  return useSWR(key, async () => await projectList(filters));
};
