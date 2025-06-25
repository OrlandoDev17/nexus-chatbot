export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await fetch(
    `https://api-inference.huggingface.co/models/${process.env.HF_IMAGE_MODEL}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
      }),
    }
  );

  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  return Response.json({
    image: `data:image/png;base64,${base64}`,
  });
}
