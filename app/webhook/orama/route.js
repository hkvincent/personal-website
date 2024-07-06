import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import client from "@/utils/directus";

export async function GET(request) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token || token !== process.env.ADMIN_TOKEN)
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  const posts = await client.request(readItems("personal_blog", {
    fields: [
      "slug",
      "title",
      "date_created",
      "cover",
      "description",
    ],
    sort: "-date_created"
  }));


  return NextResponse.json(posts, { status: 200 });
}
