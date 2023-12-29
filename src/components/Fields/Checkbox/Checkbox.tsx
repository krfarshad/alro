import "./Checkbox.module.css";

type Props = {
  label: string;
  name: string;
  value: string | number;
};

const Checkbox = (props: Props, ...params: any) => {
  const { label, name, value } = props;
  const id = `${name}[${value}]`;
  return (
    <div className="p-1 form-field">
      <input type="checkbox" {...params} name={name} value={value} id={id} />
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
