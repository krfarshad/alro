export interface projectEnum {
  size: number;
  beds: number;
  theme: "Modern" | "Traditional" | "classical";
  colorScheme: "Neutral" | "Accent";
}
export interface ProjectItem extends projectEnum {
  id: number;
  title: string;
  image: string;
  subTitle: string;
  description: string;
  slug: string;
}
