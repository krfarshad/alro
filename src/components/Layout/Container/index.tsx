import { ReactChildren } from "@/types";
import clsx from "clsx";

interface ContainerProps extends ReactChildren {
  className?: string;
}

const Container = (props: ContainerProps) => {
  const { children, className } = props;
  const classes = clsx("mx-auto container px-6", className && className);
  return <div className={classes}>{children}</div>;
};

export default Container;
