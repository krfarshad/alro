import { ButtonSize, ButtonColor, ButtonVariant } from "./type";

export const sizeClasses = (size: ButtonSize) => {
  switch (size) {
    case "large": {
      return "py-3 px-8 text-lg";
    }
    case "medium": {
      return "py-2 px-6 text-md";
    }
    case "small": {
      return "py-1 px-4 text-sm font-normal";
    }
    default: {
      break;
    }
  }
};

export const colorClasses = (color: ButtonColor) => {
  switch (color) {
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

export const variantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case "fill":
      return "text-primary";
    case "outlined":
      return "border";
    case "text":
      return "";
    case "underlined":
      return "";
    default:
      break;
  }
};
