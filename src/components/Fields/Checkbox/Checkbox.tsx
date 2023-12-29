import { ChangeEvent } from "react";
import "./Checkbox.module.css";

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const Checkbox = (props: Props) => {
  const { label, name, value, onChange, ...params } = props;
  const id = `${name}[${value}]`;

  return (
    <div className="p-1 form-field">
      <input
        type="checkbox"
        {...params}
        name={name}
        value={value}
        id={id}
        onChange={(e) => onChange(e)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer transition-all hover:text-primary"
      >
        <span className="px-1">{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
