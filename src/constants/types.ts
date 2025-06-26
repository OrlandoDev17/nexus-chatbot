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

export type MessageRole = "user" | "assistant" | "system";

export type MessageType = "text" | "image";

export type Message = {
  role: MessageRole;
  content: string;
  type?: MessageType;
};
