import { RangeInput, Text } from "@/components";
import { ArrowRight2 } from "iconsax-react";
import InputRange from "react-input-range";

const ProjectFilters = () => {
  const onChange = () => {};
  return (
    <div className="p-2">
      <div className="flex flex-wrap items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Size of the house</Text>
        <div className="filter-box w-full my-4 px-6">
          <RangeInput min={50} max={500} />
        </div>
      </div>
      <div className="flex flex-wrap items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Number of beds</Text>
        <div className="filter-box w-full my-4 px-6">
          <RangeInput min={1} max={4} />
        </div>
      </div>

      <div className="flex items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Choose theme</Text>
        <div className="filter-box w-full"></div>
      </div>
      <div className="flex items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Color Scheme</Text>
        <div className="filter-box w-full"></div>
      </div>
    </div>
  );
};

export default ProjectFilters;
