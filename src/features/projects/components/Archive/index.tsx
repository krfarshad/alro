import { Container, Title } from "@/components";
import ProjectItems from "./ProjectItems";

const Archive = () => {
  return (
    <Container>
      <Title tag="h1" className="text-center my-2">
        Projects
      </Title>
      <ProjectItems />
    </Container>
  );
};

export default Archive;
