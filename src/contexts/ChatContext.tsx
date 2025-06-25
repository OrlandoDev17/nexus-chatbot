"use client";

import { createContext, useContext, ReactNode, useState } from "react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

type ChatContextType = {
  messages: Message[];
  addMessage: (message: Message) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, isLoading, setIsLoading }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
