import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const offset = searchParams.get('offset');
  const ranking_type = searchParams.get('ranking_type');
  const limit = searchParams.get('limit');

    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${ranking_type}&limit=${limit}&offset=${offset}`,
      {
        headers: {
          "X-MAL-CLIENT-ID": "93aa982946934e6773009c6350188796",
        },
      }
    );
    const result = await response.json();
    console.log(result);


  return NextResponse.json(result);
}
