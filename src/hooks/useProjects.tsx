import { projectList } from "@/api/projectList";
import useSWR from "swr";
export const useProjects = () => {
  return useSWR("/api/users", projectList);
};
