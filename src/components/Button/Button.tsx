import clsx from "clsx";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { ButtonProps } from "./utils/type";
import { sizeClasses, colorClasses, variantClasses } from "./utils/utils";

type ButtonComponentProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(
  (props: ButtonComponentProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      className,
      disable = false,
      color = "primary",
      size = "medium",
      variant = "fill",
      ...params
    } = props;
    const classes = clsx(
      "inline-block rounded-sm outline-none  hover:transition-all transition-all",
      className && className,
      sizeClasses(size),
      colorClasses(color),
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
