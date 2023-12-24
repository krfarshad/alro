import { Row, SpinnerLoading } from "@/components";
import ProjectItem from "./ProjectItem";
import { useProjects } from "@/hooks/useProjects";

const ProjectItems = () => {
  const { data, isLoading, error } = useProjects();
  isLoading && <SpinnerLoading />;
  if (error) {
    throw new Error("Fetch Error Data");
  }
  return (
    <Row>
      {data && data.map((item) => <ProjectItem key={item.id} item={item} />)}
    </Row>
  );
};

export default ProjectItems;
