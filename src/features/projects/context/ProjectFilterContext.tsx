import { ReactChildren, setStateProp } from "@/types";
import { createContext, useState } from "react";
import { ProjectFilter } from "..";

interface FilterContextProps {
  filters: ProjectFilter | null;
  setFilters: setStateProp<ProjectFilter | null>;
}

// const defaultFilter: ProjectFilter = {
//   size: { min: 50, max: 500 },
//   beds: { min: 0, max: 4 },
//   theme: ["Modern", "Traditional", "classical"],
//   colorScheme: ["Neutral", "Accent"],
// };

export const FilterContext = createContext<FilterContextProps>({
  filters: null,
  setFilters: () => {},
});

const ProjectFilterContext = (props: ReactChildren) => {
  const [filters, setFilters] = useState<ProjectFilter | null>(null);
  const { children } = props;
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default ProjectFilterContext;
