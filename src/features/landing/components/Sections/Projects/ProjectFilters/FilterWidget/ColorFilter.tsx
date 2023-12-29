import { Checkbox, Row } from "@/components";
import { FilterColorSchemeEnum, FilterContext } from "@/features/projects";
import { ChangeEvent, useContext, useState } from "react";

const ColorFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const [colors, setColors] = useState(filters.colorScheme);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value as FilterColorSchemeEnum;

    if (checked) {
      const updatedColors = [...colors, value];
      setColors(updatedColors);
      const updatedFilters = { ...filters, colorScheme: updatedColors };
      setFilters(updatedFilters);
    } else {
      const updatedColors = colors.filter((item) => item !== value);
      setColors(updatedColors);
      const updatedFilters = { ...filters, colorScheme: updatedColors };
      setFilters(updatedFilters);
    }
  };
  return (
    <Row>
      <Checkbox
        label="Neutral"
        name="colorScheme"
        value="Neutral"
        onChange={handleChange}
        checked={colors.includes("Neutral")}
      />
      <Checkbox
        label="Accent"
        name="colorScheme"
        value="Accent"
        onChange={handleChange}
        checked={colors.includes("Accent")}
      />
    </Row>
  );
};
export default ColorFilter;
