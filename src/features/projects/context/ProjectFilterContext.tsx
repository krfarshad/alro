import { ReactChildren, setStateProp } from "@/types";
import { createContext, useState } from "react";
import { ProjectFilter } from "..";
import { defaultFilter } from "../utils/defaultFilter";

interface FilterContextProps {
  filters: ProjectFilter;
  setFilters: setStateProp<ProjectFilter>;
}

export const FilterContext = createContext<FilterContextProps>({
  filters: defaultFilter,
  setFilters: () => {},
});

const ProjectFilterContext = (props: ReactChildren) => {
  const [filters, setFilters] = useState<ProjectFilter>(defaultFilter);
  const { children } = props;
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default ProjectFilterContext;
