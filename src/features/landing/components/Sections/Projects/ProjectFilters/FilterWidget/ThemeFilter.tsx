import { Checkbox, Row } from "@/components";
import { FilterContext, FilterThemeEnum } from "@/features/projects";
import { ChangeEvent, useContext } from "react";

const ThemeFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value as FilterThemeEnum;
    if (checked) {
      const updatedThemes = [...filters.theme, value];
      const updatedFilters = { ...filters, theme: updatedThemes };
      setFilters(updatedFilters);
    } else {
      const updatedThemes = filters.theme.filter((item) => item !== value);
      const updatedFilters = { ...filters, theme: updatedThemes };
      setFilters(updatedFilters);
    }
  };

  return (
    <Row>
      <Checkbox
        label="Modern"
        name="theme"
        value="Modern"
        onChange={handleChange}
        checked={filters.theme.includes("Modern")}
      />
      <Checkbox
        label="Traditional"
        name="theme"
        value="Traditional"
        onChange={handleChange}
        checked={filters.theme.includes("Traditional")}
      />
      <Checkbox
        label="classical"
        name="theme"
        value="classical"
        onChange={handleChange}
        checked={filters.theme.includes("classical")}
      />
    </Row>
  );
};
export default ThemeFilter;
