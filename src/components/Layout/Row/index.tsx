import { ChildrenAndClasses } from "@/types";
import { clsx } from "clsx";

const Row = (props: ChildrenAndClasses) => {
  const { children, className } = props;
  const classes = clsx("flex flex-wrap w-full", className && className);

  return <div className={classes}>{children}</div>;
};

export default Row;
