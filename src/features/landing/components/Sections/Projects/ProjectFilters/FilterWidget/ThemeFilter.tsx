import { Checkbox, Row } from "@/components";
import { FilterContext, FilterThemeEnum } from "@/features/projects";
import { ChangeEvent, useContext, useState } from "react";

const ThemeFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const [themes, setThemes] = useState(filters.theme);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value as FilterThemeEnum;
    if (checked) {
      const updatedThemes = [...themes, value];
      setThemes(updatedThemes);
      const updatedFilters = { ...filters, theme: updatedThemes };
      setFilters(updatedFilters);
    } else {
      const updatedThemes = themes.filter((item) => item !== value);
      setThemes(updatedThemes);
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
        checked={themes.includes("Modern")}
      />
      <Checkbox
        label="Traditional"
        name="theme"
        value="Traditional"
        onChange={handleChange}
        checked={themes.includes("Traditional")}
      />
      <Checkbox
        label="classical"
        name="theme"
        value="classical"
        onChange={handleChange}
        checked={themes.includes("classical")}
      />
    </Row>
  );
};
export default ThemeFilter;
