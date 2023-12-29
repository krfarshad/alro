import { Button } from "@/components";
import { FilterContext, defaultFilter } from "@/features/projects";
import { useContext } from "react";

const RemoveFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const handleClick = () => {
    setFilters(defaultFilter);
  };
  return (
    <Button type="primary" size="small" onClick={handleClick}>
      Remove all filters
    </Button>
  );
};
export default RemoveFilter;
