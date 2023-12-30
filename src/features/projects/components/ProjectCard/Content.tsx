import { Button, Text, Title } from "@/components";
import { Link } from "react-router-dom";
import { ProjectItemProp } from ".";

const Content = (props: ProjectItemProp) => {
  const { slug, title, subTitle } = props.project;
  return (
    <div
      className="content rounded-sm z-10 absolute right-0 -bottom-8 w-[90%] bg-gray-800 p-2 text-white text-left group-hover:h-full group-hover:bottom-0 group-hover:w-full group-hover:bg-[#000000d8] transition-all hover:transition-all
        group-hover:flex group-hover:items-center  group-hover:flex-wrap"
    >
      <div className="group-hover:text-center w-full">
        <Title className="text-white w-full text-sm" tag="h6">
          {title}
        </Title>
        <Text className="w-full text-xs my-2 text-[#D0D4D9]">{subTitle}</Text>
        <Button
          color="primary"
          variant="outlined"
          className="mt-4 !p-0 border-primary hover:bg-primary hover:text-white hidden group-hover:block mx-auto transition-all"
          size="small"
        >
          <Link to={`/projects/${slug}/`} className="!px-12 !py-1 inline-block">
            view
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Content;
