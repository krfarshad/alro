import { Layout } from "@/components";
import { ErrorBoundary } from "@/features/errorBoundary";
import AboutPage from "@/pages/about/AboutPage";
import BlogPage from "@/pages/blog";
import SinglePage from "@/pages/blog/[:slug]";
import HomePage from "@/pages/home/HomePage";
import notFoundPage from "@/pages/notFound/notFoundPage";
import ServicesPage from "@/pages/services";
import { createBrowserRouter } from "react-router-dom";
import ProjectSingle from "@/pages/projects/[:slug]";
import ProjectsPage from "@/pages/projects";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        Component: HomePage,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        Component: AboutPage,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/services",
        Component: ServicesPage,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/blog",
        Component: BlogPage,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/blog/:slug",
        Component: SinglePage,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/projects",
        Component: ProjectsPage,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/projects/:slug",
        Component: ProjectSingle,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: "*",
    Component: notFoundPage,
  },
]);
