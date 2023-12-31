import { ReactChildren } from "@/types";

export type ButtonColor = "primary" | "success" | "disable" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "fill" | "outlined" | "underlined" | "text";

export interface LoadingButtonProps extends ReactChildren {
  isloading: boolean;
  className?: string;
  disable?: boolean;
  type: ButtonColor;
  size: ButtonSize | undefined;
  variant?: ButtonVariant;
}

export interface ButtonProps {
  size?: ButtonSize;
  className?: string;
  disable?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColor;
}
