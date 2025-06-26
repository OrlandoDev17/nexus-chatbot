"use client";

import React, { useState } from "react";
import { ImageIcon, PaperClipIcon, SendIcon } from "./Icons";
import { useChat } from "@/hooks/useChat";
import { useImage } from "@/hooks/useImage";

export default function ChatBar() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const [isImageMode, setIsImageMode] = useState(false);

  const { sendMessage } = useChat();
  const { generateImage } = useImage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prompt = input.trim();
    if (!prompt) return;

    setInput("");

    if (isImageMode) {
      await generateImage(prompt);
    } else {
      await sendMessage(prompt);
    }
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center border-2 ${
          isInputFocused
            ? "border-orange-400 shadow-orange-200"
            : "border-gray-300/50"
        } px-2 py-2 rounded-3xl shadow-lg w-[48vw] group transition-colors duration-200`}
      >
        <button
          onClick={() => setIsImageMode((prev) => !prev)}
          className={`ml-4 cursor-pointer p-2 rounded-2xl transition-all
            ${
              isImageMode
                ? "bg-orange-200 text-orange-600"
                : "hover:bg-orange-100 hover:text-orange-500"
            }`}
        >
          <ImageIcon />
        </button>
        <form className="flex items-center">
          <input type="file" hidden id="upload" />
          <button
            id="upload"
            type="button"
            className="p-2 rounded-2xl cursor-pointer hover:bg-violet-100 hover:text-violet-500 transition-all"
          >
            <PaperClipIcon />
          </button>
        </form>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 ml-2">
          <input
            className="w-[38vw] h-10 focus:outline-none bg-transparent px-2"
            type="text"
            id="message"
            placeholder="Envía un mensaje a Nexus..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <button
            type="submit"
            className="p-2 rounded-2xl cursor-pointer bg-gradient-to-r from-orange-200 via-orange-300 to-red-400 text-white hover:saturate-300 transition-all"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </>
  );
}
