import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <div className="w-full">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default page;
