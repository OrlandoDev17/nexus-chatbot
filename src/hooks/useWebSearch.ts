import { useState } from "react";

export function useWebSearch() {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const search = async (query: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResults(data.results);
    } catch (err) {
      console.error("Error en la búsqueda:", err);
    } finally {
      setLoading(false);
    }
  };

  return { results, search, loading };
}
