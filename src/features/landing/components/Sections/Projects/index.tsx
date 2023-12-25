import { Container, Row, Title } from "@/components";
import ProjectItems from "./ProjectItems";
import ProjectFilters from "./ProjectFilters";

const Projects = () => {
  return (
    <section className="projects py-20 text-center">
      <Container>
        <Row>
          <div className="filters w-full md:w-1/2 lg:w-1/3">
            <Title tag="h2">Our Projects</Title>
            <Title tag="p">Filter the decoration you want</Title>
            <ProjectFilters />
          </div>
          <div className="projects w-full md:w-1/2 lg:w-2/3">
            <ProjectItems />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
