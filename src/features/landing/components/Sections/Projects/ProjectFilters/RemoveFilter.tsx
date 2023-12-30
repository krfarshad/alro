import { Button } from "@/components";
import { FilterContext, defaultFilter } from "@/features/projects";
import { deepEqual } from "@/utils/deepEqual";
import { useContext } from "react";

const RemoveFilter = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleClick = () => {
    setFilters(defaultFilter);
  };

  const hasFilter = deepEqual(filters, defaultFilter);
  return (
    <>
      {hasFilter ? null : (
        <Button
          color="primary"
          size="small"
          className="bg-primary text-white !font-light !text-xs"
          onClick={handleClick}
          disable={hasFilter}
        >
          Remove all filters
        </Button>
      )}
    </>
  );
};
export default RemoveFilter;
