import clsx from "clsx";

type TitleProps = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  title: string;
};
const Title = (props: TitleProps) => {
  const { className, title, tag = "h1" } = props;
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  const classes = clsx("font-bold", className && className);
  return <CustomTag className={classes}>{title}</CustomTag>;
};

export default Title;
