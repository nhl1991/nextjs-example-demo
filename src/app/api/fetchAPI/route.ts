import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const offset = req.nextUrl.searchParams.get('offset');
  const response = await fetch(
    `https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=4&offset=${offset}`,
    {
      headers: {
        "X-MAL-CLIENT-ID": "93aa982946934e6773009c6350188796",
      },
    }
  );
  // const { data } = response
  const result = await response.json();
  const { data } = result
  console.log("GET API");

  return NextResponse.json({ data });
}
