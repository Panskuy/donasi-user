import SearchBlogInput from "@/components/blog/SearchBlogInput";
import SectionBlog from "@/components/blog/SectionBlog";
import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params?.search || "";
  const blog = await prisma.blog.findMany({
    where: {
      isShow: true,
      ...(search && {
        title: {
          contains: search,
          mode: "insensitive",
        },
      }),
    },

    include: {
      sumbangan: true,
    },
  });

  return (
    <div>
      <h1 className="text-center text-3xl mb-4 font-bold text-blue-900">
        Blog
      </h1>
      <SearchBlogInput />
      <SectionBlog blog={blog} title={"Blog"} />
    </div>
  );
};

export default page;
