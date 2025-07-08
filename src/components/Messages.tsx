"use client";

import { UserIcon, RobotIcon } from "./Icons";
import { useChatContext } from "@/context/ChatContext";
import ImageLoader from "./ImageLoader";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Messages() {
  const { messages, loadingType } = useChatContext();

  if (messages.length === 0) {
    return null;
  }

  const formatText = (text: string) => {
    return text.replace(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|!)\s/g, "\n\n");
  };

  return (
    <div className="w-full md:w-[80vw] lg:w-[60vw] xl:w-[50vw] h-[calc(100vh-200px)] overflow-y-auto overflow-x-visible px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="space-y-4 sm:space-y-5 md:space-y-6 pt-12 sm:pt-14 md:pt-16 pb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex relative ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`font-outfit font-semibold absolute -top-10 sm:-top-12 ${
                message.role === "assistant"
                  ? "-left-10 sm:-left-12 md:-left-14"
                  : "-right-10 sm:-right-12 md:-right-14"
              }`}
            >
              {message.role === "user" ? (
                <UserIcon className="size-10 sm:size-11 md:size-12 text-orange-500 bg-orange-100 p-1.5 sm:p-2 rounded-full" />
              ) : (
                <RobotIcon className="size-10 sm:size-11 md:size-12 text-violet-500 bg-violet-100 p-1.5 sm:p-2 rounded-full" />
              )}
            </span>
            <div
              className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 sm:p-4 ${
                message.role === "user"
                  ? "bg-orange-500 text-white rounded-tr-none"
                  : "bg-gray-100 text-gray-800 rounded-tl-none"
              }`}
            >
              {message.type === "image" ? (
                message.content === "loading-image" ? (
                  <ImageLoader />
                ) : message.content ? (
                  <Image
                    src={message.content}
                    alt="Imagen generada"
                    className="rounded-xl w-full max-w-md border border-gray-300"
                    width={500}
                    height={500}
                  />
                ) : (
                  <div className="w-full max-w-md h-[200px] flex items-center justify-center bg-red-100 text-red-500 rounded-xl">
                    No se pudo generar la imagen.
                  </div>
                )
              ) : (
                <div className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed">
                  <ReactMarkdown>{formatText(message.content)}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        ))}
        {loadingType === "chat" ? (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2">
              <div className="flex space-x-2">
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        ) : loadingType === "image" ? (
          <ImageLoader />
        ) : null}
      </div>
    </div>
  );
}
