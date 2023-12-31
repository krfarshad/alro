import { Player } from "@lottiefiles/react-lottie-player";
import animate from "./notfound.json";

const Animation = () => {
  return (
    <Player
      autoplay
      loop
      src={animate}
      style={{ height: "400px", width: "380px" }}
    ></Player>
  );
};

export default Animation;
