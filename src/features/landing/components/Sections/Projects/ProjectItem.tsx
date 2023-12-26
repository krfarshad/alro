import { Button, Text, Title } from "@/components";
import { ProjectItem } from "@/features/projects";
import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";

type ProjectItemProp = { item: ProjectItem };
const ProjectItem = (props: ProjectItemProp) => {
  const { item } = props;
  return (
    <div className="h-[500px]">
      <div className="relative h-[470px] w-full bg-slate-800 group">
        <div className="overlay absolute left-0 top-0 w-full h-full z-0">
          <Thumbnail image={item.image} />
        </div>
        <div
          className="content rounded-sm z-10 absolute right-0 -bottom-8 w-[90%] bg-gray-800 p-2 text-white text-left group-hover:h-full group-hover:bottom-0 group-hover:w-full group-hover:bg-[#000000d8] transition-all hover:transition-all
        group-hover:flex group-hover:items-center  group-hover:flex-wrap"
        >
          <div className="group-hover:text-center w-full">
            <Title className="text-white w-full text-sm" tag="h6">
              {item.title}
            </Title>
            <Text className="w-full text-xs my-2 text-[#D0D4D9]">
              {item.subTitle}
            </Text>
            <Button
              type="primary"
              variant="outlined"
              className="mt-4 border-primary px-12 hidden group-hover:block mx-auto transition-all"
              size="small"
            >
              <Link to={`/projects/${item.slug}`}>view</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
