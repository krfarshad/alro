import clsx from "clsx";
import { forwardRef } from "react";
import { SpinnerLoading } from "..";

type ButtonType = "primary" | "success" | "disable" | "danger" | "info";
type ButtonSize = "small" | "medium" | "large";

type LoadingButtonProps = {
  isloading: boolean;
  text: string;
  className?: string;
  disable?: boolean;
  type: ButtonType;
  size?: ButtonSize;
};
const LoadingButton = forwardRef((props: LoadingButtonProps) => {
  const { isloading, text, className, disable, type, size = "medium" } = props;
  const classes = clsx(
    "inline-block rounded-sm outline-none",
    className && className,
    sizeClasses(size),
    typeClasses(type)
  );
  return (
    <button className={classes} disabled={isloading || disable}>
      {isloading && <SpinnerLoading />}
      {text}
    </button>
  );
});

export default LoadingButton;

const sizeClasses = (size: ButtonSize) => {
  switch (size) {
    case "large": {
      return "py-3 px-8";
    }
    case "medium": {
      return "py-2 px-6";
    }
    case "small": {
      return "py-1 px-2";
    }
    default: {
      break;
    }
  }
};

const typeClasses = (type: ButtonType) => {
  switch (type) {
    case "primary":
      return "text-primary";
    case "success":
      return "";
    case "disable":
      return "";
    case "danger":
      return "";
    case "info":
      return "";
    default:
      break;
  }
};
