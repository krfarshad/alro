import { projects } from "../lib/data/projects";

// just for simulation api calling
export const getProject = async (slug: string | undefined) => {
  if (!slug) {
    throw new Error("Slug is require for fetching project item");
  }
  const res = projects.find((project) => project.slug === slug);
  return res ? res : null;
};
