import { projectList } from "@/features/projects/api/projectList";
import useSWR from "swr";
export const useProjects = () => {
  return useSWR("/api/projects", projectList);
};
