import { Title } from "@/components";
import { ReactChildren } from "@/types";

interface Props extends ReactChildren {
  title: string;
}
const FilterWidget = (props: Props) => {
  const { children, title } = props;
  return (
    <div className="flex flex-wrap items-center py-2 border-b border-slate-200">
      <Title className="!text-md !font-bold" tag="h6">
        {title}
      </Title>
      <div className="filter-box w-full my-4 px-2">{children}</div>
    </div>
  );
};
export default FilterWidget;
