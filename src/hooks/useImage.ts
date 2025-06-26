"use client";

import { useChatContext } from "@/context/ChatContext";

export function useImage() {
  const { addMessage, setLoadingType } = useChatContext();

  const generateImage = async (prompt: string) => {
    addMessage({ role: "user", content: prompt, type: "text" });
    setLoadingType("image");

    try {
      const res = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();
      addMessage({ role: "assistant", content: data.image, type: "image" });
    } catch (err) {
      console.error(err);
      addMessage({
        role: "assistant",
        content: "Lo siento, hubo un error al generar la imagen.",
        type: "text",
      });
    } finally {
      setLoadingType("none");
    }
  };

  return {
    generateImage,
  };
}
