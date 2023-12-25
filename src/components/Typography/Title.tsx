import { ReactChildren } from "@/types";
import clsx from "clsx";

interface TitleProps extends ReactChildren {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}
const Title = (props: TitleProps) => {
  const { className, children, tag = "p" } = props;
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  const classes = clsx("text-title", className && className);
  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Title;
