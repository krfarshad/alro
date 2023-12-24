import { postList } from "@/api/postList";
import useSWR from "swr";
export const useProjects = () => {
  return useSWR("/api/users", postList);
};
