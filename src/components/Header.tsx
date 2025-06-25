export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white py-3 sm:py-4 border-b-2 border-gray-300/50 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-1 sm:gap-2">
        <img 
          className="size-10 sm:size-12 md:size-14" 
          src="/images/nexus.svg" 
          alt="Logo de Nexus" 
        />
        <div>
          <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl font-semibold">Nexus AI</h3>
          <span className="text-xs sm:text-sm text-gray-600">Asistente Inteligente</span>
        </div>
      </div>
      <div>
        <button className="bg-orange-300 hover:bg-orange-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base transition-colors duration-200">
          Cambiar de Modelo
        </button>
      </div>
    </header>
  );
}
