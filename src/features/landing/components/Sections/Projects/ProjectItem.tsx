import { Text, Title } from "@/components";
import { ProjectItem } from "@/types";

type ProjectItemProp = { item: ProjectItem };
const ProjectItem = (props: ProjectItemProp) => {
  const { item } = props;
  return (
    <div className="w-full md:w-1/2">
      <div className="h-80 w-full">
        <Title tag="h3">{item.title}</Title>
        <Text>{item.subTitle}</Text>
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
};

export default ProjectItem;
