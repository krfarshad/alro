import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  ForwardedRef,
  HTMLProps,
  forwardRef,
} from "react";
import { ButtonProps } from "./utils/type";
import { sizeClasses, typeClasses, variantClasses } from "./utils/utils";

interface ExtendedButtonProps
  extends ButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef(
  (props: ExtendedButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      className,
      disable = false,
      type,
      size = "medium",
      variant = "fill",
      ...params
    } = props;
    const classes = clsx(
      "inline-block rounded-sm outline-none  hover:transition-all transition-all",
      className && className,
      sizeClasses(size),
      typeClasses(type),
      variantClasses(variant)
    );
    return (
      <button className={classes} ref={ref} disabled={disable} {...params}>
        {children}
      </button>
    );
  }
);

export default Button;
