// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const { path } = await req.json();
  const x = new Date().toString();
  
    console.log(path)
  revalidatePath(path); // 예: "/blog" or "/products"

  return Response.json({ revalidated: true, now: x });
}
