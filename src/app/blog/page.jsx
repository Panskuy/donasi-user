import SectionBlog from "@/components/blog/SectionBlog";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const blog = await prisma.blog.findMany({
    include: {
      sumbangan: true,
    },
  });

  return (
    <div>
      <h1 className="text-center text-3xl mb-4 font-bold text-blue-900">
        Blog
      </h1>
      <SectionBlog blog={blog} title={"Blog"} />
    </div>
  );
};

export default page;
