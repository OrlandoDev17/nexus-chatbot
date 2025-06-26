"use client";

import { useChatContext } from "@/context/ChatContext";

export function useChat() {
  const { addMessage, setLoadingType } = useChatContext();

  const sendMessage = async (prompt: string) => {
    addMessage({ role: "user", content: prompt, type: "text" });
    setLoadingType("chat");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await res.json();
      addMessage({ role: "assistant", content: data.reply, type: "text" });
    } catch (err) {
      addMessage({
        role: "assistant",
        content: "Lo siento, hubo un error al procesar tu solicitud.",
        type: "text",
      });
    } finally {
      setLoadingType("none");
    }
  };

  return {
    sendMessage,
  };
}
