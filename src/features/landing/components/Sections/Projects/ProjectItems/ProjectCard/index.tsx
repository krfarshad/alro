import { ProjectItem } from "@/features/projects";
import Thumbnail from "./Thumbnail";
import Content from "./Content";

export type ProjectItemProp = { item: ProjectItem };
const ProjectItem = (props: ProjectItemProp) => {
  const { item } = props;
  return (
    <div className="h-[500px]">
      <div className="relative h-[470px] w-full bg-slate-800 group">
        <div className="overlay absolute left-0 top-0 w-full h-full z-0">
          <Thumbnail image={item.image} />
        </div>
        <Content item={item} />
      </div>
    </div>
  );
};

export default ProjectItem;
