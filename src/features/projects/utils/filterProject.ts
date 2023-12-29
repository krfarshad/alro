import { isBetween } from "@/utils/isBetween";
import { ProjectFilter, ProjectItem } from "..";
import { projects } from "../lib/data/projects";

export const filterProject = async (
  filters: ProjectFilter
): Promise<ProjectItem[] | null> => {
  const filteredProjects = projects.filter((project: ProjectItem) => {
    if (
      filters.colorScheme.includes(project.colorScheme) &&
      filters.theme.includes(project.theme) &&
      isBetween(project.beds, filters.beds) &&
      isBetween(project.size, filters.size)
    ) {
      return project;
    }
  });
  return filteredProjects;
};
