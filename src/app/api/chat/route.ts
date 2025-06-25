export async function POST(req: Request) {
  const { messages }: { messages: { role: string; content: string }[] } =
    await req.json();
  const userMessage = messages[messages.length - 1].content;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }],
      }),
    }
  );

  const data = await res.json();
  const text =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "No hay respuesta.";

  return Response.json({
    reply: text,
  });
}
