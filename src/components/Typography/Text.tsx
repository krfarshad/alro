import { ReactChildren } from "@/types";
import clsx from "clsx";

interface TextProps extends ReactChildren {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const Text = (props: TextProps) => {
  const { className, tag = "p", children } = props;
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  const classes = clsx("text-secondary", className && className);

  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Text;
