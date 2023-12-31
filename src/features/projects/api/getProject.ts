import { projects } from "../lib/data/projects";

// just for simulation api calling
export const getProject = async (slug: string | undefined) => {
  const res = slug
    ? projects.find((project) => project.slug === slug)
    : undefined;
  return res;
};
