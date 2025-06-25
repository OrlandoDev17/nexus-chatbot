import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/contexts/ChatContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Nexus Chatbot | Asistente de IA Conversacional",
  description:
    "Experimenta la nueva generación de conversaciones con IA. Obtén respuestas instantáneas e inteligentes a tus consultas con Nexus Chatbot.",
  keywords: [
    "chatbot de IA",
    "IA conversacional",
    "asistente virtual",
    "Nexus",
    "inteligencia artificial",
  ],
  authors: [{ name: "Orlando López" }],
  creator: "Orlando López",
  publisher: "Orlando López",
  icons: {
    icon: "/images/nexus.svg",
  },
  openGraph: {
    title: "Nexus Chatbot | Asistente de IA Conversacional",
    description:
      "Experimenta la nueva generación de conversaciones con IA. Obtén respuestas instantáneas e inteligentes.",
    url: "https://tudominio.com",
    siteName: "Nexus Chatbot",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Chatbot | Asistente de IA Conversacional",
    description:
      "La próxima generación de conversaciones con inteligencia artificial a tu alcance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ChatProvider>
        <body>{children}</body>
      </ChatProvider>
    </html>
  );
}
