import { Container, Row, SpinnerLoading, Text, Title } from "@/components";
import { useParams } from "react-router";
import { useProject } from "../../hooks/useProject";
import Thumbnail from "../ProjectCard/Thumbnail";

const Single = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useProject(slug);

  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (error) {
    throw new Error("Fetch Error Data");
  }

  return (
    <Container className="py-8">
      {data ? (
        <>
          <Title>{data.title}</Title>
          <Text>{data.subTitle}</Text>
          <Row>
            <Text className="m-1 px-2 py-1 bg-slate-100 text-sm rounded-sm">
              size: {data.size} meters
            </Text>
            <Text className="m-1 px-2 py-1 bg-slate-100 text-sm rounded-sm">
              beds: {data.beds}{" "}
            </Text>
            <Text className="m-1 px-2 py-1 bg-slate-100 text-sm rounded-sm">
              Color scheme: {data.colorScheme}
            </Text>
            <Text className="m-1 px-2 py-1 bg-slate-100 text-sm rounded-sm">
              Theme: {data.theme}
            </Text>
          </Row>
          <Thumbnail image={data.image} className="h-auto w-auto my-4" />
          <Text className="text-justify">{data.description}</Text>
        </>
      ) : null}
    </Container>
  );
};

export default Single;
