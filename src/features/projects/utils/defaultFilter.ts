import { ProjectFilter } from "..";

export const defaultFilter: ProjectFilter = {
  size: { min: 50, max: 500 },
  beds: { min: 1, max: 4 },
  theme: ["Modern", "Traditional", "classical"],
  colorScheme: ["Neutral", "Accent"],
};
