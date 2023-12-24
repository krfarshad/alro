import { ReactChildren } from "@/types";

export type ButtonType = "primary" | "success" | "disable" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "fill" | "outlined" | "underlined" | "text";

export interface LoadingButtonProps extends ReactChildren {
  isloading: boolean;
  className?: string;
  disable?: boolean;
  type: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export interface ButtonProps extends ReactChildren {
  className?: string;
  disable?: boolean;
  type: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
