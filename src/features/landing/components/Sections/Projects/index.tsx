import { Container, Row, Title } from "@/components";
import ProjectItems from "./ProjectItems/ProjectItems";
import ProjectFilters from "./ProjectFilters/ProjectFilters";
import { ProjectFilterContext } from "@/features/projects";
import MoreButton from "./MoreButton";

const Projects = () => {
  return (
    <section className="projects pt-28 pb-20 text-center">
      <Container>
        <Row>
          <ProjectFilterContext>
            <div className="filters w-full md:w-1/2 lg:w-1/3 text-left">
              <Title tag="h2">Our Projects</Title>
              <Title tag="p">Filter the decoration you want</Title>
              <ProjectFilters />
            </div>
            <div className="projects w-full md:w-1/2 lg:w-2/3">
              <ProjectItems />
              <MoreButton />
            </div>
          </ProjectFilterContext>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
