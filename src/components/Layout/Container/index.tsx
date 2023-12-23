import { ReactChildren } from "@/types";

const Container = (props: ReactChildren) => {
  const { children } = props;
  return <div className="mx-auto container">{children}</div>;
};

export default Container;
