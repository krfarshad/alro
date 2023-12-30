import { Row, SpinnerLoading } from "@/components";
import { useProjects } from "../../../hooks/useProjects";
import ProjectCard from "./ProjectCard";

const ProjectItems = () => {
  const { data, isLoading, error } = useProjects({});

  isLoading && <SpinnerLoading />;

  if (error) {
    throw new Error("Fetch Error Data");
  }

  return (
    <Row>
      {data &&
        data.map((project) => (
          <div
            className="w-full sm:w-1/2 md:w/1/3 lg:w-1/4 p-2"
            key={project.id}
          >
            <ProjectCard project={project} />
          </div>
        ))}
    </Row>
  );
};

export default ProjectItems;
