import { ReactNode } from "react";

export interface ReactChildren {
  children: ReactNode;
}
export interface ReactChildrenOptional {
  children?: ReactNode;
}

export interface ClassName {
  className: string;
}
export interface ClassNameOptional {
  className?: string;
}

export interface ChildrenAndClasses extends ReactChildren, ClassNameOptional {}

export interface Route {
  to: string;
  title: string;
}
export interface MenuRoute extends Route {
  children?: Route[];
}

export interface Range {
  max: number;
  min: number;
}

export interface Testimonial {
  id: number;
  image: string;
  name: string;
  text: string;
  rate: number;
}
