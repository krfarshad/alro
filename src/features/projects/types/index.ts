export type FilterThemeEnum = "Modern" | "Traditional" | "classical";

export type FilterColorSchemeEnum = "Neutral" | "Accent";
export interface projectEnum {
  size: number;
  beds: number;
  theme: FilterThemeEnum;
  colorScheme: FilterColorSchemeEnum;
}
export interface ProjectItem extends projectEnum {
  id: number;
  title: string;
  image: string;
  subTitle: string;
  description: string;
  slug: string;
}

export interface SizeFilterProject {
  size: { min: number; max: number };
}
export interface BedsFilterProject {
  beds: { min: number; max: number };
}
export interface ThemeFilterProject {
  theme: FilterThemeEnum[];
}
export interface ColorFilterProject {
  colorScheme: FilterColorSchemeEnum[];
}
export interface ProjectFilter
  extends SizeFilterProject,
    BedsFilterProject,
    ThemeFilterProject,
    ColorFilterProject {}
