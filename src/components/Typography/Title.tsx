import clsx from "clsx";

type TitleProps = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  children: string;
};
const Title = (props: TitleProps) => {
  const { className, children, tag = "h1" } = props;
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  const classes = clsx("font-bold text-title", className && className);
  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Title;
