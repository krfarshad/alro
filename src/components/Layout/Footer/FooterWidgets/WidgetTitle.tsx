import { Title } from "@/components";
import { ReactChildren } from "@/types";

const WidgetTitle = (props: ReactChildren) => {
  const { children } = props;
  return (
    <Title className="text-white mb-3 uppercase font-semibold" tag="h6">
      {children}
    </Title>
  );
};

export default WidgetTitle;
