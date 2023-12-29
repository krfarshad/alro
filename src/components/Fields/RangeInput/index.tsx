import InputRange, { InputRangeProps } from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./stlye.module.css";

const RangeInput = (props: InputRangeProps) => {
  return <InputRange {...props} />;
};

export default RangeInput;
