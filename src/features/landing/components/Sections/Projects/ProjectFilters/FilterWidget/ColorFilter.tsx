import { Checkbox, Row } from "@/components";
import { FilterColorSchemeEnum, FilterContext } from "@/features/projects";
import { ChangeEvent, useContext } from "react";

const ColorFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value as FilterColorSchemeEnum;

    if (checked) {
      const updatedColors = [...filters.colorScheme, value];
      const updatedFilters = { ...filters, colorScheme: updatedColors };
      setFilters(updatedFilters);
    } else {
      const updatedColors = filters.colorScheme.filter(
        (item) => item !== value
      );
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
        checked={filters.colorScheme.includes("Neutral")}
      />
      <Checkbox
        label="Accent"
        name="colorScheme"
        value="Accent"
        onChange={handleChange}
        checked={filters.colorScheme.includes("Accent")}
      />
    </Row>
  );
};
export default ColorFilter;
