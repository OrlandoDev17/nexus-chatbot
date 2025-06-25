"use client";

import { FEATURES } from "@/constants/consts";
import FeatureCard from "./FeatureCard";
import Messages from "./Messages";
import { useChat } from "@/contexts/ChatContext";

export default function Hero() {
  const { messages } = useChat();

  return (
    <section className="flex flex-col justify-center items-center h-[75vh] gap-4 radial-gradient-orange w-full">
      {messages.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            className="size-20 bg-gradient-to-tr from-orange-300 via-orange-500 to-orange-700 rounded-xl p-3"
            src="/images/nexus-alt.svg"
            alt="Logo de Nexus"
          />
          <h1 className="font-outfit font-semibold text-4xl tracking-wide">
            ¡Hola! Soy Nexus
          </h1>
          <p className="max-w-180 text-center text-lg text-gray-600 font-light">
            Soy un asistente de IA avanzado. Puedo ayudarte con conversaciones,
            análisis de imágenes, generación de contenido y crear imágenes
            increíbles para ti.
          </p>
          <ul className="flex gap-4 mt-6">
            {FEATURES.map(
              ({
                id,
                title,
                description,
                icon,
                borderColor,
                bgColor,
                textColor,
              }) => (
                <FeatureCard
                  key={id}
                  icon={icon}
                  title={title}
                  description={description}
                  borderColor={borderColor}
                  bgColor={bgColor}
                  textColor={textColor}
                />
              )
            )}
          </ul>
        </div>
      ) : (
        <Messages />
      )}
    </section>
  );
}
