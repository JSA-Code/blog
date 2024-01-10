import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  const POST_PER_PAGE = 2;
  const findQuery = {
    take: POST_PER_PAGE,
    // skip: POST_PER_PAGE * (page - 1),
    skip: POST_PER_PAGE * ((page ? parseInt(page) : 1) - 1),
    where: {
      ...(category && { categorySlug: category }),
    },
  };
  const countQuery = { where: findQuery.where };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(findQuery),
      prisma.post.count(countQuery),
    ]);

    // return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
    return new NextResponse(JSON.stringify({ posts, count }));
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
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
    });

    // return new NextResponse(JSON.stringify(post, { status: 200 }));
    return new NextResponse(JSON.stringify(post));
  } catch (err) {
    console.log(err);

    return new NextResponse(
      // JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
