import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChatBar from "@/components/ChatBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="mx-auto w-full">
          <Hero />
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-center items-center p-4">
          <ChatBar />
        </div>
        <Footer />
      </div>
    </div>
  );
}
