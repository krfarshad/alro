import { posts } from "../lib/data/posts";
// just for simulation api calling
export const getPost = async (slug: string | undefined) => {
  const res = slug ? posts.find((post) => post.slug === slug) : null;
  return res;
};
