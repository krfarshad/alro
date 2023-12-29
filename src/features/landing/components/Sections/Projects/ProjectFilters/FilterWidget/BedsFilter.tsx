import { RangeInput } from "@/components";
import { FilterContext } from "@/features/projects";
import { Range } from "@/types";
import { useContext, useState } from "react";

const BedsFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const [value, setValue] = useState<Range>(filters.beds);

  const handleChange = (newValue: Range | number) => {
    setValue(newValue as Range);
    setFilters({ ...filters, beds: value });
  };

  return (
    <RangeInput
      step={1}
      minValue={1}
      maxValue={4}
      value={value}
      onChange={(newValue) => handleChange(newValue)}
    />
  );
};
export default BedsFilter;
