// Tipos
import type { FeatureCard } from "./types";
// Iconos
import { RobotIcon, ImageIcon, SparklesIcon } from "@/components/Icons";

export const FEATURES: FeatureCard[] = [
  {
    id: 1,
    title: "Conversación Natural",
    description: "Chatea conmigo como lo harías con un amigo",
    icon: RobotIcon,
    borderColor: "border-orange-300",
    bgColor: "bg-orange-200",
    textColor: "text-orange-500",
  },
  {
    id: 2,
    title: "Análisis de Imágenes",
    description: "Sube imágenes para que las analice",
    icon: ImageIcon,
    borderColor: "border-red-300",
    bgColor: "bg-red-200",
    textColor: "text-red-500",
  },
  {
    id: 3,
    title: "Generación de Imágenes",
    description: "Genera imágenes increíbles para ti",
    icon: SparklesIcon,
    borderColor: "border-violet-300",
    bgColor: "bg-violet-200",
    textColor: "text-violet-500",
  },
] as const;
