import { RangeInput } from "@/components";
import { FilterContext } from "@/features/projects";
import { Range } from "@/types";
import { useContext, useState } from "react";

const SizeFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const [value, setValue] = useState<Range>(filters.size);

  const handleChange = (newValue: Range | number) => {
    setValue(newValue as Range);
    setFilters({ ...filters, beds: value });
  };

  return (
    <RangeInput
      step={50}
      minValue={50}
      maxValue={500}
      value={value}
      onChange={(newValue) => handleChange(newValue)}
    />
  );
};
export default SizeFilter;
