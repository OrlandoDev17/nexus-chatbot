import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white py-3 sm:py-4 border-b-2 border-gray-300/50 ">
      <div className="flex items-center gap-1 sm:gap-2 max-w-5xl w-full mx-auto">
        <Image
          className="size-10 sm:size-12 md:size-14"
          src="/images/nexus.svg"
          alt="Logo de Nexus"
          width={50}
          height={50}
        />
        <div>
          <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl font-semibold">
            Nexus AI
          </h3>
          <span className="text-xs sm:text-sm text-gray-600">
            Asistente Inteligente
          </span>
        </div>
      </div>
    </header>
  );
}
