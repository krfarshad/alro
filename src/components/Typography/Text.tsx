import clsx from "clsx";

type TextProps = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  children: string;
};

const Text = (props: TextProps) => {
  const { className, tag = "p", children } = props;
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  const classes = clsx("text-secondary", className && className);

  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Text;
