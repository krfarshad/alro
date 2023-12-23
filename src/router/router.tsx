import { Layout } from "@/components";
import { ErrorBoundary } from "@/features/errorBoundary";
import AboutPage from "@/pages/about/AboutPage";
import ContactPage from "@/pages/contact/ContactPage";
import HomePage from "@/pages/home/HomePage";
import notFoundPage from "@/pages/notFound/notFoundPage";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/contact",
        Component: ContactPage,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: "*",
    Component: notFoundPage,
  },
]);
