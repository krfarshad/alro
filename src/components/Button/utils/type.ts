import { ReactChildren } from "@/types";

export type ButtonType = "primary" | "success" | "disable" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "fill" | "outlined" | "underlined" | "text";

export interface LoadingButtonProps extends ReactChildren {
  isloading: boolean;
  className?: string;
  disable?: boolean;
  type: ButtonType;
  size: ButtonSize | undefined;
  variant?: ButtonVariant;
}

export interface ButtonProps extends ReactChildren {
  size?: ButtonSize;
  className?: string;
  disable?: boolean;
  type: ButtonType;
  variant?: ButtonVariant;
}
