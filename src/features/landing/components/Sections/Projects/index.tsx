import { Container, Title } from "@/components";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <section className="projects">
      <Container>
        <Title tag="h2">Our Projects</Title>
        <Title tag="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
        <ProjectItems />
      </Container>
    </section>
  );
};

export default Projects;
