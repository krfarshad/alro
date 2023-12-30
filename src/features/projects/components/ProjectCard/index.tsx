import Thumbnail from "./Thumbnail";
import Content from "./Content";
import { ProjectItem } from "../../types";
import { ReactChildrenOptional } from "@/types";

export interface ProjectItemProp extends ReactChildrenOptional {
  project: ProjectItem;
}

const ProjectCard = (props: ProjectItemProp) => {
  const { project } = props;
  return (
    <div className="h-[500px]">
      <div className="relative h-[470px] w-full bg-slate-800 group">
        <div className="overlay absolute left-0 top-0 w-full h-full z-0">
          <Thumbnail image={project.image} />
        </div>
        <Content project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
