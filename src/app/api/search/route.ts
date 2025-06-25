// export async function POST(req: Request) {
//   const { query } = await req.json();

//   const res = await fetch(
//     `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${
//       process.env.SERP_API_KEY
//     }`
//   );
//   const data = await res.json();

//   return Response.json({ results: data });
// }
