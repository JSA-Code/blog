import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { user: true },
    });
    // return new NextResponse(JSON.stringify(comments, { status: 200 }));
    return new NextResponse(JSON.stringify(comments));
  } catch (err) {
    console.log(err);

    return new NextResponse(
      // JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};

export const POST = async (req: Request) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      // JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
      JSON.stringify({ message: "Not Authenticated!" })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user?.email },
    });

    // return new NextResponse(JSON.stringify(comment, { status: 200 }));
    return new NextResponse(JSON.stringify(comment));
  } catch (err) {
    console.log(err);

    return new NextResponse(
      // JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
