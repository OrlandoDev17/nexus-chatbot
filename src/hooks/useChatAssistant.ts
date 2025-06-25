"use client";

import { useChat } from "@/contexts/ChatContext";

export function useChatAssistant() {
  const { addMessage, setIsLoading } = useChat();

  const sendMessage = async (
    messages: Array<{ role: string; content: string }>
  ) => {
    if (!messages.length) return;

    setIsLoading(true);
    const lastMessage = messages[messages.length - 1];
    addMessage({ role: "user", content: lastMessage.content });

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      const data = await response.json();
      addMessage({ role: "assistant", content: data.reply });
      return data.reply;
    } catch (error) {
      console.error("Error en useChatAssistant:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage };
}
