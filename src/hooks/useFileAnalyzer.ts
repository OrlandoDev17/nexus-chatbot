import { useState } from "react";

export function useFileAnalyzer() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeFile = async (file: File) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setText(data.content);
    } catch (err) {
      console.error("Error analizando archivo:", err);
    } finally {
      setLoading(false);
    }
  };

  return { text, analyzeFile, loading };
}
