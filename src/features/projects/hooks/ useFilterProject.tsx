import { useState } from "react";
import { projectEnum } from "..";

const defaultFilter: projectEnum = {
  beds: 2,
  size: 200,
  theme: "classical",
  colorScheme: "Neutral",
};

const useFilterProject = () => {
  const [filter, setFilter] = useState<projectEnum>(defaultFilter);

  return { filter, setFilter };
};

export default useFilterProject;
