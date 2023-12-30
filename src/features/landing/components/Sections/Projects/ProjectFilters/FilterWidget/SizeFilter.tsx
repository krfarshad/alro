import { RangeInput } from "@/components";
import { FilterContext } from "@/features/projects";
import { Range } from "@/types";
import { useContext } from "react";

const SizeFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleChange = (newValue: Range | number) => {
    setFilters({ ...filters, size: newValue as Range });
  };

  return (
    <RangeInput
      step={50}
      minValue={50}
      maxValue={500}
      value={filters.size}
      onChange={(newValue) => handleChange(newValue)}
    />
  );
};
export default SizeFilter;
