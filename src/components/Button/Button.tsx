import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";
import { ButtonProps } from "./utils/type";
import { sizeClasses, typeClasses, variantClasses } from "./utils/utils";

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      className,
      disable = false,
      type,
      size = "medium",
      variant = "fill",
    } = props;
    const classes = clsx(
      "inline-block rounded-sm outline-none  hover:transition-all transition-all",
      className && className,
      sizeClasses(size),
      typeClasses(type),
      variantClasses(variant)
    );
    return (
      <button className={classes} ref={ref} disabled={disable}>
        {children}
      </button>
    );
  }
);

export default Button;
