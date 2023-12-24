import clsx from "clsx";
import { forwardRef } from "react";
import { SpinnerLoading } from "..";
import { sizeClasses, typeClasses, variantClasses } from "./utils/utils";
import { LoadingButtonProps } from "./utils/type";

const LoadingButton = forwardRef((props: LoadingButtonProps) => {
  const {
    isloading,
    children,
    variant = "fill",
    className,
    disable,
    type,
    size = "medium",
  } = props;
  const classes = clsx(
    "inline-block rounded-sm outline-none",
    className && className,
    sizeClasses(size),
    typeClasses(type),
    variantClasses(variant)
  );
  return (
    <button className={classes} disabled={isloading || disable}>
      {isloading && <SpinnerLoading />}
      {children}
    </button>
  );
});

export default LoadingButton;
