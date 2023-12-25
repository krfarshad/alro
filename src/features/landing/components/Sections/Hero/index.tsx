import { Button, Container, Title } from "@/components";
import heroBg from "../../../assets/hero.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "iconsax-react";
import logoMain from "@/assets/images/main-logo.png";
const Hero = () => {
  return (
    <div
      className="relative h-[630px] bg-slate-500 -mt-20 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Container className="flex justify-start items-center pt-20">
        <div className="overlay w-full lg:w-1/2">
          <div className="logo">
            <img src={logoMain} alt="Alro" />
          </div>
          <div className="desciption">
            <Title tag="h6" className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Title>
          </div>
          <div className="more text-right mt-8">
            <Button type="primary" className="!text-sm !text-white">
              <Link className="flex justify-center" to="/about/">
                Read more
                <ArrowRight size="20" className="text-white ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
