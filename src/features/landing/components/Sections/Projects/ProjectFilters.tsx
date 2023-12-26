import { Text } from "@/components";
import { ArrowRight2 } from "iconsax-react";

const ProjectFilters = () => {
  return (
    <div className="p-2">
      <div className="flex items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Size of the house</Text>
        <div className="filter-box"></div>
      </div>
      <div className="flex items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Number of beds</Text>
        <div className="filter-box"></div>
      </div>

      <div className="flex items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Choose theme</Text>
        <div className="filter-box"></div>
      </div>
      <div className="flex items-center py-2 border-b border-slate-200">
        <ArrowRight2 size="18" className="text-secondary" />
        <Text>Color Scheme</Text>
        <div className="filter-box"></div>
      </div>
    </div>
  );
};

export default ProjectFilters;
