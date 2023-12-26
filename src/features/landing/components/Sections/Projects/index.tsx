import { Button, Container, Row, Title } from "@/components";
import ProjectItems from "./ProjectItems";
import ProjectFilters from "./ProjectFilters";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects pt-28 pb-20 text-center">
      <Container>
        <Row>
          <div className="filters w-full md:w-1/2 lg:w-1/3 text-left">
            <Title tag="h2">Our Projects</Title>
            <Title tag="p">Filter the decoration you want</Title>
            <ProjectFilters />
          </div>
          <div className="projects w-full md:w-1/2 lg:w-2/3">
            <ProjectItems />
            <div className="text-right">
              <Button type="primary" variant="underlined" size="small">
                <Link to="/projects/">View All</Link>
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
