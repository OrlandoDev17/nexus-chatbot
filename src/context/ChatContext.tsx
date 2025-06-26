"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
  type?: "text" | "image";
};

type ChatContextType = {
  messages: Message[];
  addMessage: (msg: Message) => void;
  clearMessages: () => void;
  loadingType: "chat" | "image" | "none";
  setLoadingType: (value: "chat" | "image" | "none") => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingType, setLoadingType] = useState<"chat" | "image" | "none">(
    "none"
  );

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };
  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        clearMessages,
        loadingType,
        setLoadingType,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
