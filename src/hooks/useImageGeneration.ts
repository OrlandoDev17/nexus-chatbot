// import { useState } from "react";

// export function useImageGeneration() {
//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const generateImage = async (prompt: string) => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/image", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt }),
//       });

//       const data = await res.json();
//       setImage(data.image);
//     } catch (err) {
//       console.error("Error al generar imagen:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { image, generateImage, loading };
// }
