export default function ImageLoader() {
  return (
    <>
      <div className="w-full max-w-md h-[256px] sm:h-[320px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center">
        <div className="text-gray-500 text-sm flex flex-col items-center gap-2 animate-pulse">
          <span>Generando imagen...</span>
          <div className="flex gap-1">
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
