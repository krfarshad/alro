import FilterWidget from "./FilterWidget";
import BedsFilter from "./FilterWidget/BedsFilter";
import ColorFilter from "./FilterWidget/ColorFilter";
import SizeFilter from "./FilterWidget/SizeFilter";
import ThemeFilter from "./FilterWidget/ThemeFilter";

const ProjectFilters = () => {
  const filterItems = [
    {
      title: "Size of the house",
      cm: <SizeFilter />,
    },
    {
      title: "Number of beds",
      cm: <BedsFilter />,
    },
    {
      title: "Choose theme",
      cm: <ThemeFilter />,
    },
    {
      title: "Color Scheme",
      cm: <ColorFilter />,
    },
  ];
  return (
    <div className="p-2">
      {filterItems.map((item) => (
        <FilterWidget title={item.title}>{item.cm}</FilterWidget>
      ))}
    </div>
  );
};

export default ProjectFilters;
