import { Title, Text, Row, Container } from "@/components";
import introImage from "../../../assets/hero.jpg";
const Intro = () => {
  return (
    <Container className="py-20">
      <Row>
        <div className="w-full md:w-1/2 px-2">
          <Title tag="h2">Welcome We Are Alro</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Row>
            <ul>
              <li>Payment in installments</li>
              <li>Payment in installments</li>
              <li>Payment in installments</li>
              <li>Payment in installments</li>
              <li>Payment in installments</li>
              <li>Payment in installments</li>
            </ul>
          </Row>
          <Text>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </Text>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <img src={introImage} alt="intro" />
        </div>
      </Row>
    </Container>
  );
};

export default Intro;
