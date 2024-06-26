import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const token = request.nextUrl.searchParams.get("token");
  // If there is no token, return a 401
  if (!token || token !== process.env.ADMIN_TOKEN)
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });

  revalidatePath('/');
  revalidatePath('/posts');
  revalidateTag('personal-data');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
