import { router } from "@/router/router";
import { ReactChildrenOptional } from "@/types";
import { RouterProvider } from "react-router-dom";

const AppProvider = (props: ReactChildrenOptional) => {
  const { children } = props;
  return (
    <>
      <RouterProvider router={router} />
      {children && children}
    </>
  );
};
export default AppProvider;
