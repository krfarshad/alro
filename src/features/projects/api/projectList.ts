import { delay } from "@/utils/delay";
import { ProjectFilter, ProjectItem } from "..";
import { projects as allProjects } from "../lib/data/projects";
import { filterProject } from "../utils/filterProject";

// just for simulation api calling
export const projectList = async (
  filters?: ProjectFilter | null
): Promise<ProjectItem[] | null> => {
  if (filters) {
    const projects = await filterProject(filters);
    await delay(1000);
    return projects;
  }
  return allProjects;
};
