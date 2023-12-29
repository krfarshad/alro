import { ReactChildren, setStateProp } from "@/types";
import { createContext, useState } from "react";
import { ProjectFilter } from "..";

interface FilterContextProps {
  filters: ProjectFilter;
  setFilters: setStateProp<ProjectFilter>;
}

export const defaultFilter: ProjectFilter = {
  size: { min: 50, max: 500 },
  beds: { min: 0, max: 4 },
  theme: ["Modern", "Traditional", "classical"],
  colorScheme: ["Neutral", "Accent"],
};

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
