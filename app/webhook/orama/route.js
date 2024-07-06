import { NextRequest, NextResponse } from "next/server";
import client from "@/utils/directus";
import { readItems } from '@directus/sdk';

export async function GET(request) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token || token !== process.env.ADMIN_TOKEN)
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  const posts = await client.request(readItems("personal_blog", {
    fields: [
      "slug",
      "title",
      "date_created",
      "id",
      "description",
      "body"
    ],
    sort: "-date_created"
  }));


  return NextResponse.json(posts, { status: 200 });
}
