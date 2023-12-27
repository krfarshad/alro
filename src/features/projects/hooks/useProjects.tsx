import { projectList } from "@/features/projects/api/projectList";
import useSWR from "swr";
import { ProjectFilter } from "..";
type Props = {
  filters?: ProjectFilter | null;
};
export const useProjects = (props: Props) => {
  const { filters } = props;
  const key = filters ? ["/api/projects", filters] : "/api/projects";
  return useSWR(key, () => projectList(filters));
};
