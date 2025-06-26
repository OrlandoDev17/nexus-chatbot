export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const replicateRes = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version:
        "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc.",
      input: { prompt },
    }),
  });

  const prediction = await replicateRes.json();

  // Verifica error
  if (prediction.error) {
    return Response.json({ image: null });
  }

  // Espera que se genere (polling)
  let outputUrl = null;
  while (!outputUrl && prediction.status !== "failed") {
    const res = await fetch(
      `https://api.replicate.com/v1/predictions/${prediction.id}`,
      {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const updated = await res.json();
    if (updated.status === "succeeded") {
      outputUrl = updated.output?.[0];
    } else if (updated.status === "failed") {
      return Response.json({ image: null });
    }
    await new Promise((r) => setTimeout(r, 1000));
  }

  return Response.json({ image: outputUrl });
}
