import clsx from "clsx";

type TitleProps = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  children: string;
};
const Title = (props: TitleProps) => {
  const { className, children, tag = "p" } = props;
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  const classes = clsx("text-title", className && className);
  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Title;
