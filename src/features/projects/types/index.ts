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

export interface ProjectFilter {
  size?: { min?: number; max?: number };
  beds?: { min?: number; max?: number };
  theme?: ("Modern" | "Traditional" | "classical")[];
  colorScheme: ("Neutral" | "Accent")[];
}
