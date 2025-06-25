import { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface FeatureCard {
  id?: number;
  title: string;
  description: string;
  icon: IconType;
  borderColor: string;
  bgColor: string;
  textColor: string;
}
