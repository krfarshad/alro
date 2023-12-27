import { ProjectFilter, ProjectItem } from "..";
import { projects as allProjects } from "../lib/data/projects";
import { filterProject } from "../utils/filterProject";

// just for simulation api calling
export const projectList = (
  filters?: ProjectFilter | null
): ProjectItem[] | null => {
  if (filters) {
    const projects = filterProject(filters);
    return projects;
  }
  return allProjects;
};
