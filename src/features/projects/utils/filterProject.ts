import { isBetween } from "@/utils/isBetween";
import { ProjectFilter, ProjectItem } from "..";
import { projects } from "../lib/data/projects";

export const filterProject = (filters: ProjectFilter): ProjectItem[] | null => {
  const filteredProjects = projects.filter((project: ProjectItem) => {
    filters.colorScheme.includes(project.colorScheme) &&
      filters.colorScheme.includes(project.colorScheme) &&
      isBetween(project.beds, filters.beds?.max, filters.beds?.min) &&
      isBetween(project.size, filters.size?.min, filters.size?.max);
  });
  return filteredProjects;
};
