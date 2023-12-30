import { RangeInput } from "@/components";
import { FilterContext } from "@/features/projects";
import { Range } from "@/types";
import { useContext } from "react";

const BedsFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleChange = (newValue: Range | number) => {
    setFilters({ ...filters, beds: newValue as Range });
  };

  return (
    <RangeInput
      step={1}
      minValue={1}
      maxValue={4}
      value={filters.beds}
      onChange={(newValue) => handleChange(newValue)}
    />
  );
};
export default BedsFilter;
