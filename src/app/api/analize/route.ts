import Tesseract from "tesseract.js";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const arrayBuffer = await file.arrayBuffer();
  const blob = new Blob([arrayBuffer]);

  const result = await Tesseract.recognize(blob, "eng");
  const text = result.data.text;

  return Response.json({
    content: text,
  });
}
