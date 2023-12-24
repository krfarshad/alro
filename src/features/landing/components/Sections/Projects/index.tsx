import { Container, Row, Title } from "@/components";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <section className="projects py-20 text-center">
      <Container>
        <Title tag="h2">Our Projects</Title>
        <Title tag="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
        <Row className="mt-4">
          <ProjectItems />
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
