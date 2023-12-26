import { Range } from "@/types";
import InputRange from "react-input-range";

type Props = {
  value: number | Range;
  onChange: (value: number | Range) => void;
  params: any;
  max: number;
  min: number;
};

const RangeInput = (props: Props) => {
  const { value, onChange, max, min, ...params } = props;
  return (
    <InputRange
      maxValue={max}
      minValue={min}
      value={value}
      onChange={onChange}
      {...params}
    />
  );
};

export default RangeInput;
