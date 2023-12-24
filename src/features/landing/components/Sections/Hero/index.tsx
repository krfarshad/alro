import heroBg from "../../../assets/hero.jpg";
const Hero = () => {
  return (
    <div
      className="h-[630px] bg-slate-500 -mt-20 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      Hero
    </div>
  );
};

export default Hero;
