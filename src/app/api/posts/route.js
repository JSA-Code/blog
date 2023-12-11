import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  const POST_PER_PAGE = 2;
  const findQuery = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
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

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
