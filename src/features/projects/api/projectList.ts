import { delay } from "@/utils/delay";
import { ProjectFilter, ProjectItem } from "..";
import { projects as allProjects } from "../lib/data/projects";
import { filterProject } from "../utils/filterProject";

// just for simulation api calling
export const projectList = async (
  filters?: ProjectFilter | null
): Promise<ProjectItem[] | null> => {
  await delay(500);
  if (filters) {
    const projects = await filterProject(filters);
    return projects;
  }
  return allProjects;
};
